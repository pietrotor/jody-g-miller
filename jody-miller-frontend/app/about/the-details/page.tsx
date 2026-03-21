import type { Metadata } from "next";
import Link from "next/link";

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

export default function TheDetailsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
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
          <p>
            Jody co-founded Business Talent Group in 2007 with a simple but
            radical premise: the most talented executives in the world should
            have the freedom to work independently, on their own terms — and
            companies should have ready access to them. Over nearly two decades,
            she built BTG into the leading marketplace for high-end, on-demand
            executive talent, completing thousands of projects for Fortune 500
            companies, private equity firms, and high-growth startups.
          </p>
          <p>
            Under her leadership, BTG pioneered the concept of the "independent
            executive" and helped legitimize a new model of professional
            engagement that has since become a structural feature of how
            organizations access senior expertise.
          </p>
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Executive">
          <p>
            Before founding BTG, Jody held senior roles across media, law, and
            policy. She served as a senior executive at Hollinger International,
            one of the world&apos;s largest newspaper companies at the time,
            where she was responsible for significant operational and strategic
            functions.
          </p>
          <p>
            Earlier in her career she practiced law and worked in management
            consulting, developing the cross-sector fluency that has
            characterized her work ever since. She is equally comfortable in a
            boardroom, on a stage, in a newsroom, or in a policy meeting.
          </p>
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Government">
          <p>
            Jody served as Chief of Staff at the Office of the Vice President
            during the Clinton Administration, working alongside senior White
            House staff during a period of significant domestic and foreign
            policy activity. The experience gave her a close view of how
            leadership functions — and fails — under pressure.
          </p>
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Boards">
          <p>
            Jody serves and has served on the boards of several public,
            private, and nonprofit organizations. She brings to these roles a
            perspective shaped by decades of building, operating, and advising
            businesses — combined with a belief that boards are most valuable
            when they bring genuine operational expertise, not just oversight.
          </p>
          <p>
            She is a partner at the Vail Leadership Institute and has been a
            visiting fellow and speaker at institutions including the University
            of Chicago and Northwestern University.
          </p>
        </Section>

        <hr className="border-[var(--border)]" />

        <Section title="Non-Profit &amp; Civic">
          <p>
            Jody is a committed advocate for equal access to opportunity —
            particularly for women in business and underrepresented founders.
            She mentors early-stage entrepreneurs and has supported
            organizations focused on economic mobility, civic leadership, and
            education.
          </p>
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
