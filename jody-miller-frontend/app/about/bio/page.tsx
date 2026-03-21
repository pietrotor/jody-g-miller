import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, RevealOnScroll, AnimatedLine } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Jody Greenstone Miller — Co-Founder & former CEO of Business Talent Group, thought leader on the future of work and entrepreneurship.",
};

export default function BioPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          About
        </p>
      </FadeUp>
      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>
      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          Jody Greenstone Miller
        </h1>
      </FadeUp>
      {/* Photo + Bio */}
      <RevealOnScroll className="mt-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-[220px_1fr]">
          {/* Photo */}
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] w-full border border-[var(--border)] bg-[var(--muted)] flex items-end justify-center pb-4">
              <span className="font-sans text-xs font-light text-[var(--muted-text)]">
                Photo
              </span>
            </div>
            <div className="space-y-2.5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer font-sans text-xs font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
              >
                Download Press Bio (PDF) →
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
              >
                LinkedIn →
              </a>
              <Link
                href="https://www.ameliagmiller.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
              >
                Amelia Miller →
              </Link>
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-5 font-sans text-base font-light leading-relaxed text-[var(--body)]">
            <p>
              Jody Greenstone Miller is the Co-Founder and former CEO of
              Business Talent Group (BTG), the leading marketplace for high-end,
              on-demand executive talent. She built BTG over nearly two decades
              into a company that has matched thousands of independent
              executives with Fortune 500 companies, private equity firms, and
              high-growth startups worldwide.
            </p>
            <p>
              Before founding BTG, Jody held senior executive roles in both the
              private and public sectors. She served as Chief of Staff at the
              Office of the Vice President during the Clinton Administration,
              was a senior executive at Hollinger International, and held
              positions across media, law, and policy.
            </p>
            <p>
              Jody is a recognized thought leader on the future of work,
              independent talent, entrepreneurship, and women in leadership. She
              has written extensively for Harvard Business Review, The Wall
              Street Journal, Forbes, Fortune, and The New York Times, and has
              appeared on CNN, CNBC, and Bloomberg.
            </p>
            <p>
              She serves on corporate and nonprofit boards and is a partner at
              Vail Leadership Institute. Jody received her B.A. from Brown
              University and her J.D. from Northwestern University School of
              Law. She lives in New York with her family.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      {/* Pull quote */}
      <RevealOnScroll className="my-16">
        <div className="border-y border-[var(--border)] py-10 text-center">
          <p className="font-serif text-2xl italic leading-snug text-[var(--heading)] sm:text-3xl">
            &ldquo;I built BTG because I believed the future of work would be
            more flexible, more independent — and I wanted to be the one
            building it.&rdquo;
          </p>
          <p className="mt-4 font-sans text-xs font-light uppercase tracking-[0.2em] text-[var(--muted-text)]">
            Jody Greenstone Miller
          </p>
        </div>
      </RevealOnScroll>
      sasadf
      {/* Continue link */}
      <RevealOnScroll className="mt-4 border-t border-[var(--border)] pt-8">
        <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-[var(--muted-text)]">
          Continue
        </p>
        <Link
          href="/about/the-details"
          className="mt-3 inline-block cursor-pointer font-serif text-2xl italic text-[var(--heading)] transition-opacity duration-200 hover:opacity-60"
        >
          The Details →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
