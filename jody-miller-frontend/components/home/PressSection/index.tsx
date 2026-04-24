import { RevealOnScroll } from "@/components/ui/motion";
import { fetchPressLogos } from "@/lib/strapi";

const FALLBACK_MEDIA = [
  "WSJ", "The New York Times", "HBR", "Fortune", "Bloomberg",
  "CNN", "Fast Company", "Financial Times", "Inc.", "Fast Company",
];

export default async function PressSection() {
  const logos = await fetchPressLogos().catch(() => []);
  const names = logos.length > 0 ? logos.map((l) => l.name) : FALLBACK_MEDIA;

  return (
    <section className="mb-40 w-full overflow-hidden md:mb-48">
      <RevealOnScroll>
        <div className="mb-12 flex justify-center md:mb-16">
          <span className="ui-label text-accent-sage">
            Press &amp; Contributions
          </span>
        </div>
      </RevealOnScroll>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <div className="animate-marquee flex items-center">
          {[...names, ...names].map((name, i) => (
            <span
              key={i}
              className="flex-none px-12 font-serif text-2xl font-bold tracking-tighter text-heading opacity-40 transition-opacity duration-300 hover:opacity-100 md:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
