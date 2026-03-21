import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp, AnimatedLine, RevealOnScroll, ScrollStaggerList, ScrollStaggerItem } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "Speaking & Advisory",
  description:
    "Jody Greenstone Miller as a keynote speaker and strategic advisor — topics, areas of focus, and contact for engagements.",
};

const speakingTopics = [
  {
    title: "The Future of Work",
    description:
      "The structural transformation underway in how talent is organized, deployed, and compensated — and what it means for leaders, companies, and the broader economy.",
  },
  {
    title: "Building and Scaling Companies",
    description:
      "What it actually takes to build something from nothing and grow it without losing what made it valuable. Drawing on her experience building BTG and advising hundreds of founders.",
  },
  {
    title: "Women in Leadership",
    description:
      "An unflinching look at the structural and cultural barriers that persist in organizations — and what companies, boards, and individual leaders can do differently.",
  },
  {
    title: "Independent Talent and the On-Demand Economy",
    description:
      "How the rise of the independent executive is reshaping the competitive landscape — and why companies that fail to build flexible talent pipelines will find themselves outcompeted.",
  },
  {
    title: "Leadership Under Uncertainty",
    description:
      "Frameworks for making consequential decisions without complete information — and the qualities that distinguish leaders who navigate ambiguity well from those who are paralyzed by it.",
  },
  {
    title: "Entrepreneurship and the Long Game",
    description:
      "What a twenty-plus year entrepreneurial career teaches about resilience, reinvention, and the patience required to build something that lasts.",
  },
];

const advisoryAreas = [
  "Board governance and composition",
  "Talent strategy and the future of the workforce",
  "Executive team building and organizational design",
  "Growth strategy for marketplace businesses",
  "Women in leadership and equity in the workplace",
  "Entrepreneurial strategy for founder-led companies",
];

export default function SpeakingPage() {
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
          leadership programs. She advises boards, executive teams, and
          founders navigating periods of significant change.
        </p>
      </FadeUp>

      <RevealOnScroll className="mt-14">
        <h2 className="font-serif text-2xl text-[var(--heading)]">
          Speaking Topics
        </h2>
      </RevealOnScroll>

      <ScrollStaggerList className="mt-8 space-y-10">
        {speakingTopics.map(({ title, description }) => (
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
          For speaking inquiries, advisory conversations, or board
          opportunities, please reach out directly.
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
