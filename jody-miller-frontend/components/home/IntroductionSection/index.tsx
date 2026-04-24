import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/motion";
import YoutubeVideoPreview from "@/components/media/YoutubeVideoPreview";
import { FEATURED_VIDEO } from "./constants";

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
            <YoutubeVideoPreview
              youtubeId={FEATURED_VIDEO.youtubeId}
              title={FEATURED_VIDEO.title}
              posterUrl={FEATURED_VIDEO.posterUrl}
              posterAlt={FEATURED_VIDEO.posterAlt}
            />

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
