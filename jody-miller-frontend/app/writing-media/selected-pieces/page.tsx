import type { Metadata } from "next";
import Link from "next/link";
import { fetchSelectedPieces } from "@/lib/strapi";
import { selectedPieces as fallbackPieces } from "@/lib/mock-data";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Selected Pieces",
  description:
    "A curated selection of Jody Greenstone Miller's most significant writing — with personal notes on why each piece matters.",
};

export default async function SelectedPiecesPage() {
  const selectedPieces = await fetchSelectedPieces().catch(() => fallbackPieces);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28 lg:max-w-4xl">
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          Writing &amp; Media
        </p>
      </FadeUp>

      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>

      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          Selected Pieces
        </h1>
      </FadeUp>

      <FadeUp delay={0.28} className="mt-6 max-w-xl">
        <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
          From a body of work spanning two decades and hundreds of articles,
          interviews, and appearances — the pieces Jody considers most
          representative of her thinking, introduced in her own words.
        </p>
      </FadeUp>

      <div className="mt-16">
        <ScrollStaggerList className="space-y-0 divide-y divide-[var(--border)]">
          {selectedPieces.map((piece) => (
            <ScrollStaggerItem key={piece.id}>
              <article className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] lg:gap-12">
                {/* Image */}
                {piece.imageUrl ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--accent-sage)]/10 bg-surface-container sm:aspect-[3/4]">
                    <img
                      src={piece.imageUrl}
                      alt={piece.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border border-[var(--accent-sage)]/10 bg-[#d6d3cc] sm:aspect-[3/4]">
                    <div className="flex flex-col items-center gap-2 px-4 text-center">
                      <svg className="h-7 w-7 text-[#8a877f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                      <p className="font-sans text-[10px] font-light leading-relaxed text-[#6b6860]">
                        Article cover image
                      </p>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col">
                  <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-[var(--muted-text)]">
                    {piece.source}
                    <span className="mx-2">·</span>
                    {piece.year}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl italic leading-snug text-[var(--heading)] sm:text-3xl">
                    {piece.title}
                  </h2>

                  <blockquote className="my-6 border-l-[3px] border-[var(--accent)] pl-6">
                    <p className="font-serif text-base italic leading-relaxed text-[var(--body)] lg:text-lg">
                      {piece.personalIntro}
                    </p>
                  </blockquote>

                  <div className="mt-auto flex flex-wrap gap-5">
                    {piece.externalUrl && (
                      <Link
                        href={piece.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs font-light text-[var(--accent)] transition-opacity hover:opacity-70"
                      >
                        Read the piece →
                      </Link>
                    )}
                    {piece.pdfUrl && (
                      <Link
                        href={piece.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
                      >
                        Download PDF →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerList>
      </div>

      <RevealOnScroll className="mt-20 border-t border-[var(--border)] pt-8">
        <p className="font-sans text-xs font-light uppercase tracking-[0.2em] text-[var(--muted-text)]">
          Continue
        </p>
        <Link
          href="/writing-media/archive"
          className="mt-3 inline-block font-serif text-2xl italic text-[var(--heading)] transition-opacity duration-200 hover:opacity-60"
        >
          The Full Archive →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
