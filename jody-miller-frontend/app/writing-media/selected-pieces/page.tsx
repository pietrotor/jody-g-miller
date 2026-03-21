import type { Metadata } from "next";
import Link from "next/link";
import { selectedPieces } from "@/lib/mock-data";
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

export default function SelectedPiecesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
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

      <div className="mt-16 space-y-16">
        <ScrollStaggerList>
          {selectedPieces.map((piece) => (
            <ScrollStaggerItem key={piece.id}>
              <article className="border-t border-[var(--border)] pt-10">
                <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-[var(--muted-text)]">
                  {piece.publication}
                  <span className="mx-2">·</span>
                  {piece.year}
                </p>
                <h2 className="mt-3 font-serif text-2xl italic leading-snug text-[var(--heading)] sm:text-3xl">
                  {piece.title}
                </h2>

                {/* Magazine-style pull quote */}
                <blockquote className="my-6 border-l-[3px] border-[var(--accent)] pl-6">
                  <p className="font-serif text-lg italic leading-relaxed text-[var(--body)]">
                    {piece.personalIntro}
                  </p>
                </blockquote>

                <div className="flex flex-wrap gap-5">
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
