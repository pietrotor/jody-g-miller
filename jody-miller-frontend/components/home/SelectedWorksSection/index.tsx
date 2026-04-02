"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/motion";
import { useSelectedWorks } from "./hooks/useSelectedWorks";

interface Work {
  id: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  imagePlaceholder: string;
}

const WORKS: Work[] = [
  {
    id: "sw1",
    label: "Essay / 2025",
    title: "Why the Best Executives Are Going Independent",
    description:
      "An examination of how leadership structures must adapt to the velocity of decentralized decision-making.",
    cta: "Read Full Text",
    href: "/writing-media/selected-pieces",
    imagePlaceholder: "Editorial photo — modern workspace or executive setting",
  },
  {
    id: "sw2",
    label: "Podcast / Ep. 12",
    title: "Human Capital & AI",
    description:
      "Rediscovering the unique value of human intuition in a world of algorithmic efficiency.",
    cta: "Listen to Conversation",
    href: "/writing-media/media-about",
    imagePlaceholder: "Podcast recording session or abstract audio visual",
  },
  {
    id: "sw3",
    label: "Archive / 2023",
    title: "The Myth of the Permanent Employee",
    description:
      "Redefining the social contract through the lens of radical workplace flexibility.",
    cta: "Read Essay",
    href: "/writing-media/selected-pieces",
    imagePlaceholder: "Editorial photo — corporate or workplace abstraction",
  },
  {
    id: "sw4",
    label: "Essay / 2024",
    title: "Female Founders and the Persistent Funding Gap",
    description:
      "Despite record-breaking strides, women-led businesses still face systemic barriers to capital.",
    cta: "Read Essay",
    href: "/writing-media/selected-pieces",
    imagePlaceholder: "Photo — women in leadership or conference setting",
  },
];

export default function SelectedWorksSection() {
  const { trackRef, scrollPrev, scrollNext } = useSelectedWorks();

  return (
    <section className="mb-40 md:mb-48">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16 flex items-end justify-between border-b border-accent-sage/20 pb-6 md:mb-20">
            <span className="ui-label text-heading">Selected Works</span>
            <div className="flex items-center gap-8">
              <span className="ui-label hidden text-accent-sage sm:inline">
                Scroll to explore
              </span>
              <div className="flex gap-4">
                <button
                  onClick={scrollPrev}
                  aria-label="Previous"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-sage/30 text-accent-sage transition-all hover:bg-accent-sage hover:text-background"
                >
                  ←
                </button>
                <button
                  onClick={scrollNext}
                  aria-label="Next"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-accent-sage/30 text-accent-sage transition-all hover:bg-accent-sage hover:text-background"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Scroll track — constrained within max-width, overflow-x scrolls inside */}
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto pb-12"
        >
          {WORKS.map((work) => (
            <Link
              key={work.id}
              href={work.href}
              className="group flex w-[80vw] flex-none snap-start flex-col md:w-[480px]"
            >
              <div className="flex h-64 w-full flex-none items-center justify-center overflow-hidden border border-accent-sage/5 bg-[#d6d3cc] md:h-72">
                <div className="flex flex-col items-center gap-3 px-6 text-center">
                  <svg className="h-8 w-8 text-[#8a877f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                  <p className="font-sans text-[11px] font-light leading-relaxed text-[#6b6860]">
                    {work.imagePlaceholder}
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col pt-8">
                <span className="ui-label mb-4 block text-accent">
                  {work.label}
                </span>
                <h3 className="mb-6 font-serif text-3xl leading-tight text-heading transition-all group-hover:italic md:text-4xl">
                  {work.title}
                </h3>
                <p className="mb-8 font-sans text-base font-light leading-relaxed text-body md:text-lg">
                  {work.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-3 self-start border-b border-accent-sage/40 pb-1 font-serif text-xl italic text-heading transition-all group-hover:border-accent md:text-2xl">
                  {work.cta} →
                </span>
              </div>
            </Link>
          ))}

          {/* End spacer */}
          <div className="w-6 flex-none md:w-12" />
        </div>
      </div>
    </section>
  );
}
