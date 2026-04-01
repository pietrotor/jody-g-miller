import Link from "next/link";
import type { ArchiveItem } from "@/lib/types";
import { getSource, getCtaLabel, getItemUrl } from "@/lib/types";

interface FeaturedCardProps {
  item: ArchiveItem;
}

export default function FeaturedCard({ item }: FeaturedCardProps) {
  const url = getItemUrl(item);
  const cta = getCtaLabel(item);
  const source = getSource(item);

  return (
    <article className="bg-surface-low p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="ui-label text-accent">Featured</span>
        <span className="ui-label text-accent-sage">{item.type}</span>
        <span className="font-sans text-[10px] font-light text-accent-sage/60">
          {source}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-2xl italic leading-snug text-heading md:text-3xl">
        {item.title}
      </h3>

      <p className="mt-3 font-sans text-sm font-light leading-relaxed text-body">
        {item.description}
      </p>

      <Link
        href={url}
        target={url !== "#" ? "_blank" : undefined}
        rel={url !== "#" ? "noopener noreferrer" : undefined}
        className="mt-6 inline-block font-sans text-xs font-light text-accent transition-opacity hover:opacity-60"
      >
        {cta} →
      </Link>
    </article>
  );
}
