import Link from "next/link";
import { featuredItems } from "@/lib/mock-data";
import FeaturedCard from "@/components/archive/FeaturedCard";
import CountUp from "@/components/ui/CountUp";
import NewsletterSection from "@/components/home/NewsletterSection";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

const MEDIA = [
  "The Wall Street Journal",
  "Harvard Business Review",
  "Forbes",
  "The New York Times",
  "Fortune",
  "CNN",
  "Bloomberg",
];

const STATS = [
  { value: 25, suffix: "+", label: "Years in business" },
  { value: 200, suffix: "+", label: "Articles & appearances" },
  { value: 7, suffix: "", label: "Major publications" },
  { value: 2007, suffix: "", label: "BTG founded" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-32 sm:pt-44">
        <FadeUp delay={0}>
          <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
            Entrepreneur · Thought Leader · New York
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-5">
          <AnimatedLine />
        </FadeUp>

        <FadeUp delay={0.2} className="mt-8">
          <h1 className="font-serif text-[clamp(3.5rem,9vw,7rem)] italic leading-[1.06] tracking-tight text-[var(--heading)]">
            Jody Greenstone
            <br />
            <span className="not-italic">Miller</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.35} className="mt-7">
          <p className="font-serif text-xl italic text-[var(--muted-text)] sm:text-2xl">
            Co-Founder &amp; former CEO, Business Talent Group
          </p>
        </FadeUp>

        <FadeUp delay={0.48} className="mt-6 max-w-xl">
          <p className="font-sans text-base font-light leading-relaxed text-[var(--body)]">
            Two decades building companies, shaping conversations about the
            future of work, and advocating for better leadership. Her writing
            and speaking appear in the WSJ, HBR, Forbes, NYT, and beyond.
          </p>
        </FadeUp>

        <FadeUp delay={0.58} className="mt-10 flex flex-wrap gap-7">
          <Link
            href="/writing-media/archive"
            className="font-sans text-sm font-light text-[var(--heading)] underline underline-offset-4 transition-opacity duration-200 hover:opacity-50"
          >
            Explore the Archive →
          </Link>
          <Link
            href="/about/bio"
            className="font-sans text-sm font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
          >
            About Jody →
          </Link>
        </FadeUp>
      </section>

      {/* ── Stats + As Featured In ─────────────────────────────────────────── */}
      <RevealOnScroll>
        <div className="border-y border-[var(--border)]">
          <div className="mx-auto max-w-4xl px-6 py-14">
            {/* Stats grid */}
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-[var(--muted-text)]">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-serif text-5xl italic text-[var(--accent)]">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </dd>
                </div>
              ))}
            </dl>

            {/* Thin divider */}
            <div className="my-10 border-t border-[var(--border)]" />

            {/* As featured in */}
            <p className="mb-5 font-sans text-[10px] font-light uppercase tracking-[0.3em] text-[var(--muted-text)]">
              As featured in
            </p>
            <ScrollStaggerList className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {MEDIA.map((name) => (
                <ScrollStaggerItem key={name}>
                  <span className="font-serif italic text-sm text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]">
                    {name}
                  </span>
                </ScrollStaggerItem>
              ))}
            </ScrollStaggerList>
          </div>
        </div>
      </RevealOnScroll>

      {/* ── Featured Grid (asymmetric) ─────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <RevealOnScroll>
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl text-[var(--heading)]">
              Featured
            </h2>
            <Link
              href="/writing-media/archive"
              className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors duration-200 hover:text-[var(--heading)]"
            >
              View all →
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-2">
            {/* Large card — spans all rows in column 1–3 */}
            <div className="md:col-span-3 md:row-span-2">
              <FeaturedCard item={featuredItems[0]} variant="large" />
            </div>
            {/* Two small cards stacked in column 4–5 */}
            <div className="md:col-span-2">
              <FeaturedCard item={featuredItems[1]} variant="small" />
            </div>
            <div className="md:col-span-2">
              <FeaturedCard item={featuredItems[2]} variant="small" />
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── BTG Dark Callout ──────────────────────────────────────────────── */}
      <section className="bg-[var(--dark-bg)]">
        <div className="mx-auto max-w-4xl px-6 py-28 sm:py-36">
          <RevealOnScroll>
            <p className="font-sans text-[10px] font-light uppercase tracking-[0.3em] text-[var(--dark-label)]">
              Business Talent Group
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="mt-6">
            <h2 className="max-w-lg font-serif text-4xl italic leading-tight text-[var(--background)] sm:text-5xl">
              The leading marketplace for high-end, on-demand executive talent.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-8 max-w-md">
            <p className="font-sans text-sm font-light leading-relaxed text-[var(--dark-body)]">
              Jody co-founded BTG in 2007 with the conviction that the best
              executives in the world should have the freedom to work
              independently — and that companies should have access to them
              when and how they need them most.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3} className="mt-10">
            <Link
              href="/btg/mission"
              className="font-sans text-sm font-light text-[var(--background)] underline underline-offset-4 transition-opacity duration-200 hover:opacity-50"
            >
              About BTG →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────────────────── */}
      <NewsletterSection />

      {/* ── Speaking callout ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <RevealOnScroll>
          <div className="flex flex-col gap-8 border border-[var(--border)] p-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-[var(--muted-text)]">
                Speaking &amp; Advisory
              </p>
              <h2 className="mt-3 max-w-sm font-serif text-3xl leading-snug text-[var(--heading)]">
                Available for keynotes, boards, and advisory roles.
              </h2>
            </div>
            <Link
              href="/speaking"
              className="shrink-0 font-sans text-sm font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
            >
              Learn more →
            </Link>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
