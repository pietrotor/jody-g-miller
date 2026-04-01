import { FadeUp } from "@/components/ui/motion";

export default function HeroSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-40 pb-32 md:px-12 md:pt-48 md:pb-40">
      <div className="grid grid-cols-12 gap-8">
        {/* Main headline — full width, bleeds across 10 cols */}
        <div className="col-span-12 md:col-span-10">
          <FadeUp>
            <h1 className="font-serif text-[clamp(3rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-heading">
              Architecting the future of human capital and{" "}
              <em>agile enterprise.</em>
            </h1>
          </FadeUp>
        </div>

        {/* Sub-copy — starts at col 7 on desktop, full width on mobile */}
        <div className="col-span-12 md:col-start-7 md:col-span-6">
          <FadeUp delay={0.15}>
            <p className="font-serif text-xl font-light italic leading-relaxed text-body md:text-2xl">
              Jody Greenstone Miller is a pioneer in the evolution of work,
              exploring the intersection of institutional strategy and individual
              agency in the digital age.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="mt-10 flex items-center gap-6">
            <span className="ui-label text-accent-sage">Featured in</span>
            <div className="h-px w-16 bg-accent-sage/30" />
            <span className="ui-label italic text-heading/60">
              Harvard Business Review
            </span>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
