"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type NavChild = { label: string; href: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Bio", href: "/about/bio" },
      { label: "The Details", href: "/about/the-details" },
    ],
  },
  {
    label: "BTG",
    children: [
      { label: "Mission", href: "/btg/mission" },
      { label: "History", href: "/btg/history" },
      { label: "Accomplishments & Recognition", href: "/btg/accomplishments" },
      { label: "Investors & Board", href: "/btg/investors" },
    ],
  },
  {
    label: "Writing & Media",
    children: [
      { label: "Selected Pieces", href: "/writing-media/selected-pieces" },
      { label: "Media About Me & BTG", href: "/writing-media/media-about" },
      { label: "The Archive", href: "/writing-media/archive" },
    ],
  },
  { label: "Speaking & Advisory", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 130);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg text-[var(--heading)] transition-opacity duration-200 hover:opacity-60"
        >
          Jody Greenstone Miller
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <span className="flex cursor-pointer select-none items-center gap-0.5 font-sans text-xs font-light tracking-wide text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]">
                  {item.label}
                  <svg
                    className="h-2.5 w-2.5 opacity-50"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                {openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 pt-1"
                  >
                    <div className="min-w-56 border border-[var(--border)] border-t-2 border-t-[var(--accent)] bg-[var(--background)] py-1.5 shadow-sm">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-2 font-sans text-xs font-light text-[var(--body)] transition-colors duration-150 hover:bg-[var(--muted)] hover:text-[var(--heading)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-xs font-light tracking-wide text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex cursor-pointer flex-col items-center justify-center gap-1.5 p-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-5 bg-[var(--heading)]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block h-px w-5 bg-[var(--heading)]"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block h-px w-5 bg-[var(--heading)]"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="border-t border-[var(--border)] bg-[var(--background)] md:hidden"
        >
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="flex w-full cursor-pointer items-center justify-between py-3 font-sans text-sm font-light text-[var(--body)] transition-colors hover:text-[var(--heading)]"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <motion.span
                      animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-[var(--muted-text)]"
                    >
                      ▾
                    </motion.span>
                  </button>
                  {mobileExpanded === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mb-2 border-l border-[var(--border)] pl-4"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 font-sans text-sm font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-sans text-sm font-light text-[var(--body)] transition-colors hover:text-[var(--heading)]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
