import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/motion";

export default function IntroductionSection() {
  return (
    <section className="mb-40 border-t border-accent-sage/20 pt-16 md:mb-48">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-12">
        {/* Left text — 5 cols */}
        <div className="flex flex-col justify-center md:col-span-5">
          <RevealOnScroll>
            <span className="ui-label mb-8 block text-accent md:mb-10">
              Introduction
            </span>
            <h2 className="mb-8 font-serif text-3xl leading-tight text-heading md:text-5xl">
              A visionary approach to the{" "}
              <em>on-demand</em> economy.
            </h2>
            <p className="mb-10 font-sans text-lg font-light leading-relaxed text-body md:text-xl">
              Jody Greenstone Miller bridges the gap between traditional labor
              models and the agile workforce of tomorrow. Her perspective is
              shaped by decades at the forefront of corporate innovation and
              public service.
            </p>
            <Link
              href="/about/bio"
              className="ui-label inline-block border-b border-accent-sage pb-1 transition-all hover:border-accent hover:text-accent"
            >
              The Biography
            </Link>
          </RevealOnScroll>
        </div>

        {/* Right video — col-start-7 col-span-6 */}
        <div className="md:col-start-7 md:col-span-6">
          <RevealOnScroll delay={0.15}>
            <div className="group relative aspect-video cursor-pointer overflow-hidden border border-accent-sage/10 bg-surface-container">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85"
                alt="Jody Greenstone Miller portrait in soft light"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-heading/10 transition-colors duration-300 group-hover:bg-transparent">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                  <svg
                    className="ml-1 h-6 w-6 text-white md:h-8 md:w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between px-2">
              <span className="ui-label italic text-accent-sage/80">
                Film No. 04 — The Future of Human Capital
              </span>
              <span className="ui-label text-accent-sage/80">04:22</span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
