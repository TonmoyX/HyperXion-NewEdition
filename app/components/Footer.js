import { Separator } from "@heroui/react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <Reveal
      as="footer"
      id="contact"
      className="relative mt-16 border-t border-[var(--border)] bg-[var(--surface)]/60 px-6 py-12 backdrop-blur-xl md:px-16"
    >
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            Contact
          </h3>
          <p className="text-foreground/90">spaceresearch2023@gmail.com</p>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60">
            Policy
          </h3>
          <p>
            <a
              href="#"
              className="text-[var(--accent)] no-underline hover:underline"
            >
              Privacy policy
            </a>
          </p>
          <p>
            <a
              href="#"
              className="text-[var(--accent)] no-underline hover:underline"
            >
              Terms &amp; Conditions
            </a>
          </p>
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
            Hyper<span className="brand-gradient-text">Xion</span>
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-foreground/70">
            HyperXion explores the unknown in air and space, innovates for
            the benefit of humanity, and inspires the world through
            discovery.
          </p>
        </div>
      </div>
      <Separator className="mx-auto my-8 max-w-6xl" />
      <div className="text-center text-sm text-foreground/50">
        &copy; 2026 HyperXion | All rights reserved.
      </div>
    </Reveal>
  );
}
