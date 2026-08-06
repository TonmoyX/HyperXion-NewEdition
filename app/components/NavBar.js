"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const TOP_ITEMS = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "dropdown",
    label: "The Universe",
    links: [
      { href: "/earth", label: "Earth" },
      { href: "/mars", label: "Mars" },
      { href: "/planet", label: "Planet" },
      { href: "/galaxy", label: "Galaxy" },
      { href: "/black-whole", label: "Black Wholes" },
    ],
  },
  {
    type: "dropdown",
    label: "AeroSpace",
    links: [{ href: "/rocket", label: "Rocket" }],
  },
  {
    type: "dropdown",
    label: "Mission & Quize",
    links: [
      { href: "/mission", label: "Mission" },
      { href: "#", label: "Quize" },
    ],
  },
  {
    type: "link",
    href: "https://www.solarsystemscope.com/",
    label: "MilkyWay Galaxy",
    external: true,
  },
];

const glassPillClass =
  "absolute inset-0 rounded-full overflow-hidden border border-white/40 bg-gradient-to-b from-white/30 via-white/10 to-white/[0.04] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),inset_0_-6px_10px_rgba(255,255,255,0.06),inset_0_0_20px_rgba(120,190,255,0.15),0_8px_28px_rgba(0,0,0,0.5)] backdrop-blur-2xl backdrop-saturate-150";

const itemTextClass =
  "relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-200";

const dropdownItemClass =
  "block whitespace-nowrap rounded-full px-4 py-2 text-sm text-foreground/90 no-underline transition-all hover:bg-white/[0.12] hover:text-foreground";

const mobileLinkClass =
  "block rounded-xl px-4 py-3 text-base font-medium text-foreground no-underline transition-colors hover:bg-[var(--accent-soft)]";

const mobileSubLinkClass =
  "block rounded-xl px-4 py-2.5 pl-8 text-sm text-foreground/80 no-underline transition-colors hover:bg-[var(--accent-soft)]";

function NavItem({ item, isActive }) {
  return (
    <motion.span
      className={`${itemTextClass} ${
        isActive
          ? "text-white [text-shadow:0_0_10px_rgba(255,255,255,0.85),0_0_2px_rgba(255,255,255,0.9)]"
          : "text-white/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.5)]"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.span
          layoutId="nav-glass-pill"
          className={glassPillClass}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        >
          <span className="absolute inset-x-3 top-[3px] h-px rounded-full bg-gradient-to-r from-transparent via-white/90 to-transparent" />
          <span className="absolute -left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/25 blur-xl" />
        </motion.span>
      )}
      {item.label}
    </motion.span>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const isItemActive = (item) => {
    if (item.type === "link" && !item.external) return pathname === item.href;
    if (item.type === "dropdown")
      return item.links.some((l) => l.href === pathname);
    return false;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--background)]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/image/lg.png"
            alt="HyperXion"
            className="h-7 w-auto md:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {TOP_ITEMS.map((item) => {
            const active = isItemActive(item);

            if (item.type === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="relative"
                >
                  <NavItem item={item} isActive={active} />
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button type="button" className="relative">
                  <NavItem item={item} isActive={active} />
                </button>
                <AnimatePresence>
                  {openMenu === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 top-full z-30 mt-2 w-max min-w-[160px] -translate-x-1/2 rounded-3xl border border-white/15 bg-white/[0.06] p-1.5 shadow-2xl shadow-black/40 backdrop-blur-2xl"
                    >
                      {item.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={dropdownItemClass}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <a
            href="#contact"
            className={`${itemTextClass} text-white/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.5)]`}
          >
            Contact
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-xl text-foreground lg:hidden"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)]/95 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              <Link
                href="/"
                className={`${mobileLinkClass} ${
                  pathname === "/" ? "bg-white/[0.08]" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {TOP_ITEMS.filter((item) => item.type === "dropdown").map(
                (item) => (
                  <div key={item.label} className="mt-1">
                    <p className="px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                      {item.label}
                    </p>
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`${mobileSubLinkClass} ${
                          pathname === link.href ? "bg-white/[0.08]" : ""
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )
              )}

              <a
                href="https://www.solarsystemscope.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={mobileLinkClass}
              >
                MilkyWay Galaxy
              </a>

              <a
                href="#contact"
                className={mobileLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
