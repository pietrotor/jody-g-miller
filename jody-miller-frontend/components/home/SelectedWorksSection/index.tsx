"use client";

import Image from "next/image";
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
  image: string;
  imageAlt: string;
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
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern office environment with warm sunlight",
  },
  {
    id: "sw2",
    label: "Podcast / Ep. 12",
    title: "Human Capital & AI",
    description:
      "Rediscovering the unique value of human intuition in a world of algorithmic efficiency.",
    cta: "Listen to Conversation",
    href: "/writing-media/media-about",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Warm abstract light patterns",
  },
  {
    id: "sw3",
    label: "Archive / 2023",
    title: "The Myth of the Permanent Employee",
    description:
      "Redefining the social contract through the lens of radical workplace flexibility.",
    cta: "Read Essay",
    href: "/writing-media/selected-pieces",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Detail of luxury stationery and pen",
  },
  {
    id: "sw4",
    label: "Essay / 2024",
    title: "Female Founders and the Persistent Funding Gap",
    description:
      "Despite record-breaking strides, women-led businesses still face systemic barriers to capital.",
    cta: "Read Essay",
    href: "/writing-media/selected-pieces",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Woman entrepreneur speaking",
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
              {/* Fixed-height image — same across all cards */}
              <div className="relative h-64 w-full flex-none overflow-hidden border border-accent-sage/5 bg-surface-container md:h-72">
                <Image
                  src={work.image}
                  alt={work.imageAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 480px"
                  className="object-cover grayscale-[10%] transition-transform duration-1000 group-hover:scale-105"
                />
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
