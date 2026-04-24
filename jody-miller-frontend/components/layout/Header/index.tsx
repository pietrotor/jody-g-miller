"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeader } from "./hooks/useHeader";

interface NavChild { label: string; href: string }
interface NavItem  { label: string; href?: string; children?: NavChild[] }

const NAV: NavItem[] = [
  {
    label: "About",
    children: [
      { label: "Bio",         href: "/about/bio" },
      { label: "The Details", href: "/about/the-details" },
    ],
  },
  {
    label: "BTG",
    children: [
      { label: "Mission",         href: "/btg/mission" },
      { label: "History",         href: "/btg/history" },
      { label: "Accomplishments", href: "/btg/accomplishments" },
      { label: "Investors",       href: "/btg/investors" },
    ],
  },
  {
    label: "Writing & Media",
    children: [
      { label: "Selected Pieces", href: "/writing-media/selected-pieces" },
      { label: "Media About Me",  href: "/writing-media/media-about" },
      { label: "The Archive",     href: "/writing-media/archive" },
    ],
  },
  { label: "Speaking", href: "/speaking" },
];

function isActive(pathname: string, item: NavItem) {
  if (item.href) return pathname === item.href;
  return item.children?.some((c) => pathname.startsWith(c.href)) ?? false;
}

export default function Header() {
  const pathname = usePathname();
  const {
    scrolled,
    mobileOpen,
    setMobileOpen,
    activeDropdown,
    toggleDropdown,
    closeAll,
    navRef,
  } = useHeader();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 shadow-atmospheric backdrop-blur-md"
          : "bg-transparent"
        }`}
      >
        {/* Terracotta top accent — appears on scroll, very editorial */}
        <div
          className={`absolute inset-x-0 top-0 h-[2px] bg-accent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={navRef}
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12"
        >
          {/* ── Wordmark ──────────────────────────────────── */}
          <Link
            href="/"
            onClick={closeAll}
            className="group shrink-0"
          >
            <span className="font-serif text-[1.1rem] text-heading transition-opacity duration-200 group-hover:opacity-50">
              Jody Greenstone Miller
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────── */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActive(pathname, item);

              return (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`group/btn relative flex items-center gap-1.5 px-4 py-2 ui-label transition-colors duration-200 ${
                          active || activeDropdown === item.label
                            ? "text-heading"
                            : "text-accent-sage hover:text-heading"
                        }`}
                      >
                        {item.label}
                        {/* Chevron */}
                        <svg
                          className={`h-2.5 w-2.5 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 10 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M1 1l4 4 4-4" />
                        </svg>
                        {/* Terracotta underline */}
                        <span
                          className={`absolute bottom-0 left-4 right-4 h-px bg-accent transition-all duration-300 ${
                            active ? "opacity-100" : "opacity-0 group-hover/btn:opacity-100"
                          }`}
                        />
                      </button>

                      {/* Dropdown panel */}
                      <div
                        className={`absolute left-0 top-full z-50 min-w-[200px] origin-top border border-border/20 bg-background py-2 shadow-atmospheric transition-all duration-200 ${
                          activeDropdown === item.label
                            ? "pointer-events-auto translate-y-1 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        }`}
                      >
                        {item.children.map((child) => {
                          const childActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-center gap-2 px-5 py-3 font-sans text-xs transition-all duration-150 ${
                                childActive
                                  ? "font-normal text-accent"
                                  : "font-light text-body hover:bg-surface-low hover:text-heading"
                              }`}
                            >
                              <span
                                className={`h-1 w-1 rounded-full bg-accent flex-none transition-opacity duration-150 ${
                                  childActive ? "opacity-100" : "opacity-0"
                                }`}
                              />
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`group/link relative px-4 py-2 ui-label transition-colors duration-200 ${
                        active ? "text-heading" : "text-accent-sage hover:text-heading"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-4 right-4 h-px bg-accent transition-all duration-300 ${
                          active ? "opacity-100" : "opacity-0 group-hover/link:opacity-100"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Divider */}
            <div className="mx-4 h-4 w-px bg-border/40" />

            {/* Connect CTA */}
            <Link
              href="/contact"
              className={`inline-flex items-center px-6 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-atmospheric transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                pathname === "/contact"
                  ? "bg-accent-dark"
                  : "bg-accent hover:bg-accent-dark"
              }`}
            >
              Connect
            </Link>
          </nav>

          {/* ── Mobile toggle ─────────────────────────────── */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="relative flex h-8 w-8 items-center justify-center md:hidden"
          >
            <span className={`absolute h-px w-5 bg-heading transition-all duration-300 ${mobileOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-px bg-heading transition-all duration-200 ${mobileOpen ? "w-0 opacity-0" : "w-5 opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-heading transition-all duration-300 ${mobileOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
          </button>
        </div>
      </header>

      {/* ── Mobile menu overlay ───────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={closeAll}
        className={`fixed inset-0 z-40 bg-heading/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-down panel */}
      <div
        className={`fixed inset-x-0 top-0 z-40 bg-background transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Terracotta top accent */}
        <div className="h-[2px] bg-accent" />

        <div className="px-6 pb-10 pt-20">
          {/* Name */}
          <p className="mb-8 font-serif text-2xl text-heading">
            Jody Greenstone Miller
          </p>

          <nav>
            {NAV.map((item) => {
              const active = isActive(pathname, item);
              return (
                <div key={item.label} className="border-b border-border/10">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex w-full items-center justify-between py-4 ui-label ${
                          active ? "text-heading" : "text-accent-sage"
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                          viewBox="0 0 10 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M1 1l4 4 4-4" />
                        </svg>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.label ? "max-h-64" : "max-h-0"
                        }`}
                      >
                        <div className="space-y-0 pb-3 pl-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block py-2.5 font-sans text-sm font-light transition-colors ${
                                pathname === child.href
                                  ? "text-accent"
                                  : "text-body hover:text-heading"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`block py-4 ui-label transition-colors ${
                        active ? "text-heading" : "text-accent-sage hover:text-heading"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href="/contact"
            onClick={closeAll}
            className="mt-8 inline-flex items-center bg-accent px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-white shadow-atmospheric transition-colors duration-200 hover:bg-accent-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Connect
          </Link>
        </div>
      </div>
    </>
  );
}
