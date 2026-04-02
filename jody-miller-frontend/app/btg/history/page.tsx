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
  title: "BTG — History",
  description:
    "The story of Business Talent Group — from a founding insight in 2007 to the leading marketplace for on-demand executive talent.",
};

const timeline = [
  {
    year: "2007",
    event:
      "Jody Greenstone Miller and Hillary Doyle co-found Business Talent Group in Los Angeles with the conviction that the on-demand model that had transformed other industries would eventually reshape executive talent.",
  },
  {
    year: "2010",
    event:
      "BTG completes its first hundred engagements. Early clients include Fortune 500 companies navigating post-financial crisis restructuring — exactly the kind of on-demand senior expertise the market had never had before.",
  },
  {
    year: "2013",
    event:
      "The talent network grows to over 1,000 vetted independent executives. BTG publishes its first research on the independent executive phenomenon, drawing wide attention from business media.",
  },
  {
    year: "2016",
    event:
      "BTG opens its New York office and expands its client base significantly into financial services and private equity. The company is now operating nationally.",
  },
  {
    year: "2019",
    event:
      "BTG releases landmark research on the 'Gig Economy' for executives, placing the company at the center of the national conversation about the future of work and independent talent.",
  },
  {
    year: "2021",
    event:
      "In the wake of the pandemic's seismic disruption to labor markets, BTG experiences its largest growth year on record as companies across every sector seek the flexible expertise the marketplace provides.",
  },
  {
    year: "2023",
    event:
      "BTG reaches a new milestone in total engagements completed, serving clients across North America, Europe, and Asia. The company remains the recognized leader in its category.",
  },
];

export default function BTGHistoryPage() {
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
          BTG was born out of a conviction that the model of executive employment
          — the permanent hire, the long-term contract, the ladder — was
          increasingly misaligned with how the most talented people wanted to work
          and how the best organizations needed to access expertise. What follows
          is the story of building something that didn&apos;t exist yet.
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
