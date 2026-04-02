import type { Metadata } from "next";
import Link from "next/link";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";
import CountUp from "@/components/ui/CountUp";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Jody Greenstone Miller — Co-Founder & former CEO of Business Talent Group, thought leader on the future of work and entrepreneurship.",
};

const STATS = [
  { end: 18,  start: 0,   suffix: "+", label: "Years at BTG",            duration: 2.2 },
  { end: 200, start: 120, suffix: "+", label: "Published Articles",       duration: 2.5 },
  { end: 50,  start: 0,   suffix: "+", label: "Board & Advisory Roles",   duration: 2.0 },
];

const EXPERIENCE = [
  {
    id: "btg",
    org: "Business Talent Group (BTG)",
    role: "Co-Founder & CEO",
    period: "2007 — 2022",
    type: "Entrepreneurial",
    description:
      "Built the leading marketplace for high-end, on-demand executive talent. Under Jody's leadership, BTG completed thousands of engagements for Fortune 500 companies, private equity firms, and high-growth startups — and pioneered the concept of the independent executive.",
  },
  {
    id: "americast",
    org: "Americast",
    role: "Acting President & COO",
    period: "2001 — 2007",
    type: "Executive",
    description:
      "Led day-to-day operations of a digital video venture formed by major U.S. media companies, managing both the strategic and operational dimensions of the business.",
  },
  {
    id: "maverick",
    org: "Maverick Records",
    role: "Executive Vice President",
    period: "1999 — 2001",
    type: "Executive",
    description:
      "Senior executive at the artist-founded record label, working across business development, strategy, and operations during a transformative period in the music industry.",
  },
  {
    id: "whitehouse",
    org: "The White House",
    role: "Chief of Staff, Office of the Vice President",
    period: "1993 — 1997",
    type: "Government",
    description:
      "Served during the Clinton Administration, working directly with senior White House leadership on domestic and foreign policy initiatives. A formative experience in how consequential decisions are made under pressure.",
  },
  {
    id: "urbaninstitute",
    org: "The Urban Institute",
    role: "Board Member",
    period: "Current",
    type: "Non-Profit & Civic",
    description:
      "Providing strategic guidance to one of the country's leading economic and social policy research organizations, focused on equity, housing, and workforce development.",
  },
  {
    id: "hrw",
    org: "Human Rights Watch",
    role: "Advisory Contributor",
    period: "Current",
    type: "Non-Profit & Civic",
    description:
      "Active contributor to one of the world's leading independent organizations dedicated to defending and protecting human rights.",
  },
];

export default function BioPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-32 md:px-12 md:pt-40">
        {/* Breadcrumb */}
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="ui-label text-accent-sage">Current</span>
            <span className="text-accent-sage/30">·</span>
            <span className="ui-label text-accent-sage">About</span>
            <span className="text-accent-sage/30">·</span>
            <span className="ui-label text-heading">Jody Miller</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.08} className="mt-6">
          <AnimatedLine />
        </FadeUp>

        <FadeUp delay={0.12}>
          <h1 className="mt-6 font-serif text-5xl leading-[1.0] tracking-tight text-heading sm:text-6xl md:text-[clamp(3.5rem,6vw,5rem)]">
            Jody Greenstone Miller
          </h1>
        </FadeUp>
      </div>

      {/* ── Two-column portrait + bio ──────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-12 md:px-12 md:pb-28 md:pt-16">
        <RevealOnScroll>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:gap-16 lg:grid-cols-[320px_1fr] lg:gap-20">

            {/* Left: portrait + links */}
            <div className="flex flex-col gap-8">
              <div className="flex aspect-[3/4] w-full items-center justify-center overflow-hidden border border-accent-sage/10 bg-[#d6d3cc]">
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                  <svg className="h-10 w-10 text-[#8a877f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                  <p className="font-sans text-xs font-light leading-relaxed text-[#6b6860]">
                    Jody Greenstone Miller — red dress portrait<br />
                    (primary bio photo, 3:4 aspect ratio)
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <a
                  href="#"
                  className="group flex items-center justify-between border-b border-border/20 pb-3 font-sans text-xs font-light text-accent transition-opacity hover:opacity-60"
                >
                  <span>Download Press Bio (PDF)</span>
                  <span>→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/jodygreenstonemiller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-border/20 pb-3 font-sans text-xs font-light text-accent-sage transition-colors hover:text-heading"
                >
                  <span>LinkedIn</span>
                  <span>→</span>
                </a>
                <a
                  href="https://www.ameliagmiller.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-border/20 pb-3 font-sans text-xs font-light text-accent-sage transition-colors hover:text-heading"
                >
                  <span>Amelia Miller</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right: quote + bio */}
            <div>
              <p className="font-serif text-3xl italic leading-snug text-heading md:text-4xl">
                Redefining the way the world works.
              </p>

              <div className="mt-8 space-y-5 font-sans text-base font-light leading-relaxed text-body md:text-lg">
                <p>
                  Jody Greenstone Miller is the Co-Founder and former CEO of
                  Business Talent Group (BTG), the leading marketplace for
                  high-end, on-demand executive talent. She built BTG over
                  nearly two decades into a company that has placed thousands of
                  independent executives with Fortune 500 companies, private
                  equity firms, and high-growth startups worldwide.
                </p>
                <p>
                  Her career spans across the private, public, and non-profit
                  sectors, reflecting a deep commitment to institutional
                  excellence, enterprise, and human dignity. Jody's insights on
                  our changing landscape of labor have been featured on major
                  business publications, the Wall Street Journal, and Fortune,
                  positioning her at the forefront of discussions regarding the
                  future of work and organizational agility.
                </p>
                <p>
                  Today, she continues to shape frontier ideas and advise
                  high-growth stage companies while advocating for a more
                  flexible model of work post-industrial environment.
                </p>
              </div>

              {/* Inline links row */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/20 pt-8">
                <Link
                  href="/writing-media/selected-pieces"
                  className="ui-label text-accent transition-opacity hover:opacity-60"
                >
                  Selected Writing →
                </Link>
                <Link
                  href="/speaking"
                  className="ui-label text-accent-sage transition-colors hover:text-heading"
                >
                  Speaking Topics →
                </Link>
                <Link
                  href="/contact"
                  className="ui-label text-accent-sage transition-colors hover:text-heading"
                >
                  Get in Touch →
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <RevealOnScroll>
        <div className="border-y border-accent-sage/10 bg-surface-container">
          <div className="mx-auto grid max-w-[1440px] grid-cols-3 px-6 md:px-12">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`py-10 text-center ${i > 0 ? "border-l border-accent-sage/10" : ""}`}
              >
                <p className="font-serif text-4xl text-heading md:text-5xl">
                  <CountUp
                    end={stat.end}
                    start={stat.start}
                    suffix={stat.suffix}
                    duration={stat.duration}
                  />
                </p>
                <p className="mt-2 font-sans text-xs font-light uppercase tracking-[0.18em] text-accent-sage">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* ── Professional Experience ───────────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
        {/* Section heading */}
        <RevealOnScroll>
          <div className="mb-16 md:mb-20">
            <span className="ui-label text-accent">
              Professional Experience
            </span>
            <h2 className="mt-4 font-serif text-4xl italic leading-tight text-heading md:text-5xl">
              A Legacy of Leadership
            </h2>
          </div>
        </RevealOnScroll>

        {/* Experience list */}
        <ScrollStaggerList className="divide-y divide-border/20">
          {EXPERIENCE.map((item) => (
            <ScrollStaggerItem key={item.id}>
              <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
                {/* Left meta */}
                <div>
                  <h3 className="font-serif text-xl leading-snug text-heading md:text-2xl">
                    {item.org}
                  </h3>
                  <p className="mt-2 font-sans text-xs font-light text-accent">
                    {item.role}
                  </p>
                  <p className="mt-1 font-sans text-xs font-light text-accent-sage">
                    {item.period}
                  </p>
                </div>

                {/* Right: type + description */}
                <div>
                  <span className="ui-label text-accent-sage">{item.type}</span>
                  <p className="mt-3 font-sans text-base font-light leading-relaxed text-body">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStaggerList>

        {/* Education note */}
        <RevealOnScroll className="mt-12 border-t border-border/20 pt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
            <div>
              <h3 className="font-serif text-xl text-heading">Education</h3>
            </div>
            <div className="space-y-1 font-sans text-base font-light text-body">
              <p>B.A., Brown University</p>
              <p>J.D., Northwestern University School of Law</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

    </>
  );
}
