import type { Metadata } from "next";
import Link from "next/link";
import { fetchBtgHistory } from "@/lib/strapi";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "BTG — History",
  description:
    "The story of Business Talent Group — from a founding insight in 2007 to the leading marketplace for on-demand executive talent.",
};

export default async function BTGHistoryPage() {
  const { historyIntro: intro, timelineEvents: timeline } = await fetchBtgHistory();

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
          History
        </h1>
      </FadeUp>

      <RevealOnScroll className="mt-14">
        <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
          {intro}
        </p>
      </RevealOnScroll>

      <ScrollStaggerList className="mt-12 space-y-10">
        {timeline.map(({ year, event }) => (
          <ScrollStaggerItem key={year}>
            <div className="flex gap-8">
              <span className="w-12 shrink-0 font-serif text-base italic text-[var(--accent)]">
                {year}
              </span>
              <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
                {event}
              </p>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerList>

      <RevealOnScroll className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-8">
        <Link
          href="/btg/mission"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
        >
          ← Mission
        </Link>
        <Link
          href="/btg/accomplishments"
          className="font-sans text-xs font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
        >
          Accomplishments &amp; Recognition →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
