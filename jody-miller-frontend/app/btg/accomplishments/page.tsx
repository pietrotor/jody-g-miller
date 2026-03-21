import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]">
        Business Talent Group
      </p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--heading)] sm:text-5xl">
        Accomplishments &amp; Recognition
      </h1>

      <hr className="my-10 border-[var(--border)]" />

      <h2 className="font-serif text-2xl text-[var(--heading)]">Milestones</h2>
      <ul className="mt-5 space-y-3">
        {milestones.map((m) => (
          <li
            key={m}
            className="flex gap-4 font-sans text-base font-light leading-relaxed text-[var(--body)]"
          >
            <span className="mt-2 h-px w-4 shrink-0 self-start bg-[var(--accent)]" />
            {m}
          </li>
        ))}
      </ul>

      <hr className="my-12 border-[var(--border)]" />

      <h2 className="font-serif text-2xl text-[var(--heading)]">
        Media Recognition
      </h2>
      <div className="mt-5 space-y-8">
        {recognitions.map(({ label, description }) => (
          <div key={label}>
            <p className="font-serif italic text-lg text-[var(--heading)]">
              {label}
            </p>
            <p className="mt-1 font-sans text-base font-light leading-relaxed text-[var(--body)]">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-6 border-t border-[var(--border)] pt-8">
        <Link
          href="/btg/history"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
        >
          ← History
        </Link>
        <Link
          href="/btg/investors"
          className="font-sans text-xs font-light text-[var(--accent)] transition-opacity hover:opacity-70"
        >
          Investors & Board →
        </Link>
      </div>
    </div>
  );
}
