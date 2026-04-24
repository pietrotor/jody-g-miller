import type { Metadata } from "next";
import Link from "next/link";
import { fetchBtgMission } from "@/lib/strapi";
import { FadeUp, AnimatedLine, RevealOnScroll } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "BTG — Mission",
  description:
    "The mission of Business Talent Group: a marketplace connecting the world's best independent executives with leading organizations.",
};

export default async function BTGMissionPage() {
  const { missionIntro, missionQuote, missionClosing } =
    await fetchBtgMission();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          Business Talent Group
        </p>
      </FadeUp>
      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>
      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          Mission
        </h1>
      </FadeUp>

      <RevealOnScroll className="mt-14">
        <div className="space-y-5 font-sans text-base font-light leading-relaxed text-[var(--body)]">
          {missionIntro.split("\n\n").filter(Boolean).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </RevealOnScroll>

      {missionQuote && (
        <RevealOnScroll delay={0.1} className="my-14">
          <div className="border-y border-[var(--border)] py-10 text-center">
            <p className="font-serif text-2xl italic leading-snug text-[var(--heading)] sm:text-3xl">
              &ldquo;{missionQuote}&rdquo;
            </p>
            <p className="mt-4 font-sans text-xs font-light uppercase tracking-[0.2em] text-[var(--muted-text)]">
              Jody Greenstone Miller
            </p>
          </div>
        </RevealOnScroll>
      )}

      {missionClosing && (
        <RevealOnScroll>
          <div className="space-y-5 font-sans text-base font-light leading-relaxed text-[var(--body)]">
            {missionClosing.split("\n\n").filter(Boolean).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </RevealOnScroll>
      )}

      <RevealOnScroll className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-8">
        <Link
          href="/btg/history"
          className="cursor-pointer font-sans text-xs font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
        >
          History →
        </Link>
        <Link
          href="/btg/accomplishments"
          className="cursor-pointer font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
        >
          Accomplishments &amp; Recognition →
        </Link>
        <Link
          href="/btg/investors"
          className="cursor-pointer font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
        >
          Investors &amp; Board →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
