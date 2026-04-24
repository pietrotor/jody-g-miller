import type { Metadata } from "next";
import Link from "next/link";
import { fetchBio } from "@/lib/strapi";
import { BIO_STATS, BIO_EXPERIENCE, BIO_EDUCATION } from "@/lib/bio-data";
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

export default async function BioPage() {
  const bio = await fetchBio();
  const bioParagraphs = bio.biography.split("\n\n").filter(Boolean);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-32 md:px-12 md:pt-40">
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
              {bio.photoUrl ? (
                <div className="relative aspect-[3/4] w-full overflow-hidden border border-accent-sage/10 bg-surface-container">
                  <img
                    src={bio.photoUrl}
                    alt="Jody Greenstone Miller"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
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
              )}

              {/* Links */}
              <div className="space-y-3">
                <a
                  href={bio.downloadablePdfUrl ?? "/api/press-bio"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-border/20 pb-3 font-sans text-xs font-light text-accent transition-opacity hover:opacity-60"
                >
                  <span>Download Press Bio (PDF)</span>
                  <span>→</span>
                </a>
                {bio.linkedinUrl && (
                  <a
                    href={bio.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-border/20 pb-3 font-sans text-xs font-light text-accent-sage transition-colors hover:text-heading"
                  >
                    <span>LinkedIn</span>
                    <span>→</span>
                  </a>
                )}
                {bio.familyLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-b border-border/20 pb-3 font-sans text-xs font-light text-accent-sage transition-colors hover:text-heading"
                  >
                    <span>{link.label}</span>
                    <span>→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: quote + bio */}
            <div>
              <p className="font-serif text-3xl italic leading-snug text-heading md:text-4xl">
                {bio.headline}
              </p>

              <div className="mt-8 space-y-5 font-sans text-base font-light leading-relaxed text-body md:text-lg">
                {bioParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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
            {BIO_STATS.map((stat, i) => (
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

        <ScrollStaggerList className="divide-y divide-border/20">
          {BIO_EXPERIENCE.map((item) => (
            <ScrollStaggerItem key={item.id}>
              <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
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

        <RevealOnScroll className="mt-12 border-t border-border/20 pt-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_2fr] md:gap-12">
            <div>
              <h3 className="font-serif text-xl text-heading">Education</h3>
            </div>
            <div className="space-y-1 font-sans text-base font-light text-body">
              {BIO_EDUCATION.map((edu) => (
                <p key={edu.institution}>
                  {edu.degree}, {edu.institution}
                </p>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </>
  );
}
