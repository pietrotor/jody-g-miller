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
            <div className="group relative flex aspect-video items-center justify-center overflow-hidden border border-accent-sage/10 bg-[#d6d3cc]">
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <svg className="h-10 w-10 text-[#8a877f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <p className="font-sans text-xs font-light leading-relaxed text-[#6b6860]">
                  Featured video — Jody speaking or interview clip<br />
                  (embed or hosted video asset)
                </p>
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
