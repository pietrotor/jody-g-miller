import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-low px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">

        {/* Left: wordmark + description + copyright */}
        <div className="flex flex-col justify-between gap-8 md:gap-0">
          <div>
            <p className="font-serif text-2xl italic text-heading md:text-3xl">
              The Digital Monograph
            </p>
            <p className="mt-4 max-w-sm font-sans text-xs font-light leading-relaxed text-accent-sage">
              A quarterly dispatch on leadership, labor, and the future of
              institutional agility.
            </p>
          </div>
          <p className="ui-label text-accent-sage">
            © {new Date().getFullYear()} The Digital Monograph. All Rights Reserved.
          </p>
        </div>

        {/* Right: link grid */}
        <div className="grid grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-4 md:gap-5">
            <Link
              href="/writing-media/archive"
              className="ui-label text-accent-sage transition-colors hover:text-accent"
            >
              Newsletter
            </Link>
            <Link
              href="/privacy"
              className="ui-label text-accent-sage underline decoration-accent-sage/30 underline-offset-8 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <Link
              href="/contact"
              className="ui-label text-accent-sage transition-colors hover:text-accent"
            >
              Contact
            </Link>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ui-label text-accent-sage transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
