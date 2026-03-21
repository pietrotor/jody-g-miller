import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Bio", href: "/about/bio" },
  { label: "The Details", href: "/about/the-details" },
  { label: "BTG", href: "/btg/mission" },
  { label: "Selected Pieces", href: "/writing-media/selected-pieces" },
  { label: "The Archive", href: "/writing-media/archive" },
  { label: "Speaking & Advisory", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] mt-24">
      <div className="mx-auto max-w-3xl px-6 py-16">

        {/* Newsletter */}
        <div className="mb-14">
          <h3 className="font-serif text-2xl text-[var(--heading)]">
            Stay in touch
          </h3>
          <p className="mt-2 font-sans text-sm font-light text-[var(--muted-text)]">
            Occasional thoughts on the future of work, leadership, and entrepreneurship.
          </p>
          {/* Kit (ConvertKit) form placeholder */}
          <NewsletterForm />
        </div>

        <hr className="border-[var(--border)]" />

        {/* Nav + name */}
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-serif text-base text-[var(--heading)]">
              Jody Greenstone Miller
            </p>
            <p className="mt-1 font-sans text-xs font-light text-[var(--muted-text)]">
              New York, NY
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 sm:max-w-sm sm:justify-end">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-10 font-sans text-xs font-light text-[var(--muted-text)]">
          © {new Date().getFullYear()} Jody Greenstone Miller. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
