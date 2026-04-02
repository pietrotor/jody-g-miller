import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "BTG — Accomplishments & Recognition",
  description:
    "Business Talent Group's milestones, recognition, and impact across two decades of redefining executive talent.",
};

const recognitions = [
  {
    label: "Inc. 5000",
    description:
      "Recognized as one of the fastest-growing private companies in America — multiple years.",
  },
  {
    label: "Forbes",
    description:
      "Featured as a company changing the future of work and reshaping how executive talent is accessed and deployed.",
  },
  {
    label: "Fast Company",
    description:
      "Cited among the most innovative companies in the talent and HR category.",
  },
  {
    label: "Harvard Business Review",
    description:
      "BTG research on independent executive talent cited in multiple HBR articles and case studies on the future of work.",
  },
  {
    label: "The Wall Street Journal",
    description:
      "Profiled as the defining company in the emerging on-demand executive marketplace.",
  },
];

const milestones = [
  "Over 5,000 independent executives in the BTG talent network",
  "Thousands of engagements completed across Fortune 500 companies, PE firms, and high-growth businesses",
  "Clients in financial services, healthcare, technology, consumer, media, and the public sector",
  "Operations across North America, Europe, and Asia",
  "Pioneered the language and frameworks now used across the industry to describe independent executive work",
];

export default function BTGAccomplishmentsPage() {
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
          Accomplishments &amp; Recognition
        </h1>
      </FadeUp>

      <RevealOnScroll className="mt-14">
        <h2 className="font-serif text-2xl text-[var(--heading)]">Milestones</h2>
      </RevealOnScroll>
      <ScrollStaggerList className="mt-5 space-y-3">
        {milestones.map((m) => (
          <ScrollStaggerItem key={m}>
            <li className="flex gap-4 font-sans text-base font-light leading-relaxed text-[var(--body)]">
              <span className="mt-2 h-px w-4 shrink-0 self-start bg-[var(--accent)]" />
              {m}
            </li>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerList>

      <RevealOnScroll className="my-14">
        <hr className="border-[var(--border)]" />
      </RevealOnScroll>

      <RevealOnScroll>
        <h2 className="font-serif text-2xl text-[var(--heading)]">
          Media Recognition
        </h2>
      </RevealOnScroll>
      <ScrollStaggerList className="mt-5 space-y-8">
        {recognitions.map(({ label, description }) => (
          <ScrollStaggerItem key={label}>
            <div>
              <p className="font-serif text-lg italic text-[var(--heading)]">
                {label}
              </p>
              <p className="mt-1 font-sans text-base font-light leading-relaxed text-[var(--body)]">
                {description}
              </p>
            </div>
          </ScrollStaggerItem>
        ))}
      </ScrollStaggerList>

      <RevealOnScroll className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-8">
        <Link
          href="/btg/history"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
        >
          ← History
        </Link>
        <Link
          href="/btg/investors"
          className="font-sans text-xs font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
        >
          Investors &amp; Board →
        </Link>
      </RevealOnScroll>
    </div>
  );
}
