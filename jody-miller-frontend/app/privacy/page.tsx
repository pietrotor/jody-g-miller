import type { Metadata } from "next";
import Link from "next/link";
import {
  PRIVACY_CATEGORY_LABEL,
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED,
  PRIVACY_PAGE_TITLE,
  PRIVACY_SECTIONS,
} from "./constants";

export const metadata: Metadata = {
  title: PRIVACY_PAGE_TITLE,
  description:
    "How this website collects, uses, and protects information — and the choices available to you.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-20 pt-32 md:pt-40">
      <p className="font-sans text-xs font-light uppercase tracking-widest text-[var(--muted-text)]">
        {PRIVACY_CATEGORY_LABEL}
      </p>
      <h1 className="mt-3 font-serif text-4xl text-[var(--heading)] sm:text-5xl">
        {PRIVACY_PAGE_TITLE}
      </h1>
      <p className="mt-5 font-sans text-xs font-light uppercase tracking-widest text-accent-sage">
        Last updated — {PRIVACY_LAST_UPDATED}
      </p>
      <p className="mt-8 font-sans text-base font-light leading-relaxed text-[var(--body)]">
        {PRIVACY_INTRO}
      </p>

      <hr className="my-12 border-[var(--border)]" />

      <div className="space-y-14">
        {PRIVACY_SECTIONS.map((section, index) => (
          <section key={section.id}>
            <h2 className="font-serif text-2xl text-[var(--heading)]">
              {section.title}
            </h2>
            <div className="mt-4 space-y-3 font-sans text-base font-light leading-relaxed text-[var(--body)]">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}
            </div>
            {index < PRIVACY_SECTIONS.length - 1 ? (
              <hr className="mt-14 border-[var(--border)]" />
            ) : null}
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-[var(--border)] pt-8">
        <Link
          href="/contact"
          className="font-sans text-xs font-light text-[var(--muted-text)] transition-colors hover:text-[var(--heading)]"
        >
          Questions about this policy? Get in touch →
        </Link>
      </div>
    </div>
  );
}
