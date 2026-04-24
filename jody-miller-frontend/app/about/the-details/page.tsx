import type { Metadata } from "next";
import Link from "next/link";
import { fetchTheDetails } from "@/lib/strapi";

export const metadata: Metadata = {
  title: "The Details",
  description:
    "A full account of Jody Greenstone Miller's career — entrepreneurial, executive, board, government, and nonprofit.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl text-[var(--heading)]">{title}</h2>
      <div className="mt-4 space-y-3 font-sans text-base font-light leading-relaxed text-[var(--body)]">
        {children}
      </div>
    </section>
  );
}

export default async function TheDetailsPage() {
  const details = await fetchTheDetails();

  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-32 md:pt-40">
      <p className="font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]">
        About
      </p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--heading)] sm:text-5xl">
        The Details
      </h1>
      <p className="mt-5 font-sans text-base font-light leading-relaxed text-[var(--body)]">
        A fuller account of Jody&apos;s career — the roles she has held, the
        companies she has built, the boards she has served, and the causes she
        cares about.
      </p>

      <hr className="my-12 border-[var(--border)]" />

      <div className="space-y-14">
        <Section title="Entrepreneurial">
          {details.entrepreneurial.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Executive">
          {details.executive.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Government">
          {details.government.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Boards">
          {details.boards.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Non-Profit &amp; Civic">
          {details.nonprofit.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Education">
          <p>
            B.A., Brown University
            <br />
            J.D., Northwestern University School of Law
          </p>
        </Section>
      </div>

      <div className="mt-16 border-t border-[var(--border)] pt-8">
        <Link
          href="/about/bio"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
        >
          ← Back to Bio
        </Link>
      </div>
    </div>
  );
}
