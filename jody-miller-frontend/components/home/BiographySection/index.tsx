import Image from "next/image";
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
            <div className="aspect-[3/4] overflow-hidden border border-accent-sage/10 bg-surface">
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=720&q=85"
                  alt="Warm toned professional portrait of Jody Greenstone Miller"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale-[15%]"
                />
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
