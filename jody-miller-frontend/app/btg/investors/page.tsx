import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BTG — Investors & Board",
  description: "The investors and board members of Business Talent Group.",
};

const investors = [
  {
    name: "Placeholder Ventures",
    description:
      "A leading growth equity firm focused on technology-enabled marketplace businesses.",
  },
  {
    name: "Placeholder Capital",
    description:
      "Long-term investor in companies reshaping how work is organized and talent is deployed.",
  },
  {
    name: "Placeholder Partners",
    description:
      "Strategic investor with deep networks in enterprise software and the future of work.",
  },
];

const boardMembers = [
  {
    name: "Jody Greenstone Miller",
    title: "Co-Founder & former CEO",
  },
  {
    name: "Hillary Doyle",
    title: "Co-Founder",
  },
  {
    name: "Board Member Placeholder A",
    title: "Managing Partner, Placeholder Ventures",
  },
  {
    name: "Board Member Placeholder B",
    title: "Former COO, Placeholder Corporation",
  },
  {
    name: "Independent Director Placeholder",
    title: "Former SVP, Placeholder Global",
  },
];

export default function BTGInvestorsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]">
        Business Talent Group
      </p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--heading)] sm:text-5xl">
        Investors &amp; Board
      </h1>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="font-serif text-2xl text-[var(--heading)]">Investors</h2>
      <div className="mt-5 space-y-7">
        {investors.map(({ name, description }) => (
          <div key={name}>
            <p className="font-serif italic text-lg text-[var(--heading)]">
              {name}
            </p>
            <p className="mt-1 font-sans text-base font-light leading-relaxed text-[var(--body)]">
              {description}
            </p>
          </div>
        ))}
      </div>

      <hr className="my-12 border-[var(--border)]" />

      <h2 className="font-serif text-2xl text-[var(--heading)]">
        Board of Directors
      </h2>
      <div className="mt-5 divide-y divide-[var(--border)]">
        {boardMembers.map(({ name, title }, i) => (
          <div key={i} className="flex items-baseline justify-between py-4">
            <p className="font-sans text-base font-light text-[var(--heading)]">
              {name}
            </p>
            <p className="font-sans text-xs font-light text-[var(--muted-text)]">
              {title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-[var(--border)] pt-8">
        <Link
          href="/btg/accomplishments"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
        >
          ← Accomplishments & Recognition
        </Link>
      </div>
    </div>
  );
}
