import Link from "next/link";
import type { ArchiveItem } from "@/lib/types";
import { getSource, getCtaLabel, getItemUrl } from "@/lib/types";

interface ArchiveCardProps {
  item: ArchiveItem;
}

const TYPE_LABELS: Record<string, string> = {
  article: "Article",
  video: "Video",
  podcast: "Podcast",
};

export default function ArchiveCard({ item }: ArchiveCardProps) {
  const url = getItemUrl(item);
  const cta = getCtaLabel(item);
  const source = getSource(item);

  return (
    <article className="border-t border-border/20 py-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <span className="ui-label text-accent-sage">
              {TYPE_LABELS[item.type]}
            </span>
            <span className="font-sans text-[10px] font-light text-accent-sage/60">
              {source}
            </span>
            <span className="font-sans text-[10px] font-light text-accent-sage/40">
              {item.year}
            </span>
          </div>

          <h3 className="mt-2 font-serif text-xl italic leading-snug text-heading">
            {item.title}
          </h3>

          <p className="mt-2 font-sans text-sm font-light leading-relaxed text-body">
            {item.description}
          </p>

          <Link
            href={url}
            target={url !== "#" ? "_blank" : undefined}
            rel={url !== "#" ? "noopener noreferrer" : undefined}
            className="mt-4 inline-block font-sans text-xs font-light text-accent transition-opacity hover:opacity-60"
          >
            {cta} →
          </Link>
        </div>
      </div>
    </article>
  );
}
