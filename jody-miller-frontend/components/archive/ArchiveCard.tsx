import Link from "next/link";
import type { ArchiveItem } from "@/lib/types";
import { getSource, getCtaLabel, getItemUrl } from "@/lib/types";

interface ArchiveCardProps {
  item: ArchiveItem;
}

const typeLabel: Record<ArchiveItem["type"], string> = {
  article: "Article",
  video: "Video",
  podcast: "Podcast",
};

export default function ArchiveCard({ item }: ArchiveCardProps) {
  const source = getSource(item);
  const cta = getCtaLabel(item);
  const url = getItemUrl(item);

  return (
    <article className="group relative cursor-pointer border-b border-[var(--border)] py-7 last:border-none">
      {/* Animated left accent line */}
      <span className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-[var(--accent)] transition-transform duration-300 group-hover:scale-y-100" />

      <div className="transition-all duration-300 group-hover:pl-4">
        <div className="flex items-start justify-between gap-4">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <h3 className="font-serif text-xl italic leading-snug text-[var(--heading)] transition-colors duration-200 group-hover:text-[var(--accent)] sm:text-2xl">
              {item.title}
            </h3>
          </Link>
          <span className="shrink-0 pt-1 font-sans text-xs font-light text-[var(--muted-text)]">
            {item.year}
          </span>
        </div>

        <p className="mt-2 font-sans text-xs font-light tracking-wide text-[var(--muted-text)]">
          {source}
          <span className="mx-2 opacity-40">·</span>
          {typeLabel[item.type]}
          <span className="mx-2 opacity-40">·</span>
          {item.category}
          {item.type === "podcast" && item.duration && (
            <>
              <span className="mx-2 opacity-40">·</span>
              {item.duration}
            </>
          )}
        </p>

        <p className="mt-3 max-w-2xl font-sans text-sm font-light leading-relaxed text-[var(--body)]">
          {item.description}
        </p>

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-sans text-xs font-light tracking-wide text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
        >
          {cta} →
        </Link>
      </div>
    </article>
  );
}
