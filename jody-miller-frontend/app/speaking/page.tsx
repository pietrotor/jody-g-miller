import type { Metadata } from "next";
import Link from "next/link";
import { fetchSpeaking } from "@/lib/strapi";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Speaking & Advisory",
  description:
    "Jody Greenstone Miller as a keynote speaker and strategic advisor — topics, areas of focus, and contact for engagements.",
};

export default async function SpeakingPage() {
  const { topics, advisoryAreas, contactIntro } = await fetchSpeaking();

  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-28">
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          Speaking &amp; Advisory
        </p>
      </FadeUp>
      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>
      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          Speaking &amp; Advisory
        </h1>
      </FadeUp>
      <FadeUp delay={0.22} className="mt-5 max-w-xl">
        <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
          Jody speaks at conferences, corporate events, universities, and
          leadership programs. She advises boards, executive teams, and founders
          navigating periods of significant change.
        </p>
      </FadeUp>

      <RevealOnScroll className="mt-14">
        <h2 className="font-serif text-2xl text-[var(--heading)]">
          Speaking Topics
        </h2>
      </RevealOnScroll>

      <ScrollStaggerList className="mt-8 space-y-10">
        {topics.map(({ title, description }) => (
          <ScrollStaggerItem key={title}>
            <h3 className="font-serif text-xl italic text-[var(--heading)]">
              {title}
            </h3>
            <p className="mt-2 font-sans text-base font-light leading-relaxed text-[var(--body)]">
              {description}
            </p>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerList>

      <RevealOnScroll className="mt-14">
        <hr className="border-[var(--border)]" />
      </RevealOnScroll>

      <RevealOnScroll className="mt-12">
        <h2 className="font-serif text-2xl text-[var(--heading)]">
          Advisory Areas
        </h2>
        <ul className="mt-6 space-y-3">
          {advisoryAreas.map((area) => (
            <li
              key={area}
              className="flex gap-4 font-sans text-base font-light leading-relaxed text-[var(--body)]"
            >
              <span className="mt-2 h-px w-4 shrink-0 bg-[var(--accent)]" />
              {area}
            </li>
          ))}
        </ul>
      </RevealOnScroll>

      <RevealOnScroll className="mt-14">
        <hr className="border-[var(--border)]" />
      </RevealOnScroll>

      <RevealOnScroll className="mt-12">
        <h2 className="font-serif text-2xl text-[var(--heading)]">
          Get in touch
        </h2>
        <p className="mt-3 font-sans text-base font-light leading-relaxed text-[var(--body)]">
          {contactIntro}
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-block cursor-pointer font-sans text-sm font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
        >
          Contact Jody →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
