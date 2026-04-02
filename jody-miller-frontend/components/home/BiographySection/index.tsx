import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/motion";

export default function BiographySection() {
  return (
    <section className="mb-40 border-y border-accent-sage/10 bg-surface-container py-24 md:mb-48 md:py-40">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-12">
        {/* Portrait — col-span-4 */}
        <div className="md:col-span-4">
          <RevealOnScroll>
            <h2 className="ui-label mb-8 text-accent md:mb-12">
              Biography Sketch
            </h2>
            <div className="flex aspect-[3/4] items-center justify-center overflow-hidden border border-accent-sage/10 bg-[#d6d3cc]">
              <div className="flex flex-col items-center gap-3 px-6 text-center">
                <svg className="h-10 w-10 text-[#8a877f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p className="font-sans text-xs font-light leading-relaxed text-[#6b6860]">
                  Portrait photo of Jody — warm toned,<br />
                  professional editorial style (3:4)
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Text — col-start-6 col-span-6 */}
        <div className="flex flex-col justify-center md:col-start-6 md:col-span-6">
          <RevealOnScroll delay={0.15}>
            <p className="mb-10 font-serif text-3xl leading-[1.15] text-heading md:mb-12 md:text-5xl">
              Founder and Chair of Business Talent Group (BTG), Jody is a
              leading voice on the &ldquo;on-demand&rdquo; economy and the
              future of work.
            </p>

            <div className="space-y-6 font-sans text-lg font-light leading-relaxed text-body md:space-y-8 md:text-xl">
              <p>
                Her insights have shaped how modern corporations leverage
                high-end independent talent to solve their most complex
                challenges. A frequent speaker and contributor to major business
                publications, she bridges the gap between traditional labor
                models and the agile workforce of tomorrow.
              </p>
              <p>
                Previously, Jody served as Chief of Staff at the Office of the
                Vice President during the Clinton Administration, and held
                senior roles across media, law, and policy. She received her
                B.A. from Brown University and her J.D. from Northwestern
                University School of Law.
              </p>
            </div>

            <div className="mt-12 md:mt-16">
              <Link
                href="/about/bio"
                className="ui-label border-b border-accent pb-1 text-heading transition-colors hover:text-accent"
              >
                Full Curriculum Vitae
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
