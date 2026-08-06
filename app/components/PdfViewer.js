"use client";

import { useEffect, useRef, useState } from "react";

let pdfjsLibPromise;
function loadPdfjs() {
  if (!pdfjsLibPromise) {
    pdfjsLibPromise = import("pdfjs-dist").then((pdfjsLib) => {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
      return pdfjsLib;
    });
  }
  return pdfjsLibPromise;
}

export default function PdfViewer({ src, height = 520 }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const wheelLockRef = useRef(false);
  const renderTaskRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");
  const [syncedPageNum, setSyncedPageNum] = useState(pageNum);

  if (pageNum !== syncedPageNum) {
    setSyncedPageNum(pageNum);
    setPageInput(String(pageNum));
  }

  useEffect(() => {
    let cancelled = false;

    loadPdfjs()
      .then((pdfjsLib) =>
        pdfjsLib.getDocument({
          url: encodeURI(src),
          disableStream: true,
          disableRange: true,
          disableAutoFetch: true,
        }).promise
      )
      .then((doc) => {
        if (cancelled) return;
        setPdfDoc(doc);
        setNumPages(doc.numPages);
        setStatus("ready");
      })
      .catch((err) => {
        console.error("PdfViewer failed to load", src, err);
        if (!cancelled) {
          setErrorMessage(err?.message || String(err));
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (!pdfDoc) return;
    let cancelled = false;

    pdfDoc.getPage(pageNum).then((page) => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const baseViewport = page.getViewport({ scale: 1 });
      const scale = Math.min(
        container.clientWidth / baseViewport.width,
        container.clientHeight / baseViewport.height
      );
      const viewport = page.getViewport({ scale });

      const dpr = window.devicePixelRatio || 1;
      canvas.width = viewport.width * dpr;
      canvas.height = viewport.height * dpr;
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;

      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      renderTaskRef.current?.cancel();
      const task = page.render({ canvasContext: ctx, viewport });
      renderTaskRef.current = task;
      task.promise.catch(() => {});
    });

    return () => {
      cancelled = true;
      renderTaskRef.current?.cancel();
    };
  }, [pdfDoc, pageNum]);

  const goToPage = (n) => {
    const clamped = Math.min(Math.max(1, n), numPages || 1);
    setPageNum(clamped);
  };

  const handleWheel = (e) => {
    if (!numPages) return;
    e.preventDefault();
    if (wheelLockRef.current) return;
    wheelLockRef.current = true;
    setTimeout(() => {
      wheelLockRef.current = false;
    }, 350);
    goToPage(pageNum + (e.deltaY > 0 ? 1 : -1));
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl bg-white shadow-lg"
      style={{ height }}
    >
      <div
        ref={containerRef}
        onWheel={handleWheel}
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-neutral-200"
      >
        {status === "error" && (
          <p className="px-4 text-center text-sm text-neutral-600">
            Couldn&apos;t preview this PDF.
            {errorMessage && (
              <span className="mt-1 block text-xs text-neutral-500">
                {errorMessage}
              </span>
            )}
          </p>
        )}
        {status === "loading" && (
          <p className="text-sm text-neutral-500">Loading…</p>
        )}
        <canvas ref={canvasRef} className={status === "ready" ? "" : "hidden"} />
      </div>

      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between overflow-hidden rounded-t-2xl border-b border-white/40 bg-white/40 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150">
        <span className="pointer-events-none absolute inset-x-3 top-0 h-px bg-gradient-to-r from-transparent via-white/95 to-transparent" />
        <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-800 [text-shadow:0_1px_2px_rgba(255,255,255,0.7)]">
          <input
            type="number"
            min={1}
            max={numPages || 1}
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            onBlur={() => goToPage(Number(pageInput) || 1)}
            onKeyDown={(e) => {
              if (e.key === "Enter") goToPage(Number(pageInput) || 1);
            }}
            className="w-12 rounded-md border border-white/60 bg-white/60 px-1 py-0.5 text-center backdrop-blur-md"
            disabled={!numPages}
          />
          <span>/ {numPages || "…"}</span>
        </div>
        <a
          href={src}
          download
          aria-label="Download PDF"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-white/50 hover:text-neutral-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4.5 w-4.5"
          >
            <path d="M12 3v12" />
            <path d="M7 10l5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
