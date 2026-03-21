import Link from "next/link";
import type { ArchiveItem } from "@/lib/types";
import { getSource, getCtaLabel, getItemUrl } from "@/lib/types";

interface FeaturedCardProps {
  item: ArchiveItem;
  variant?: "large" | "small";
}

export default function FeaturedCard({
  item,
  variant = "small",
}: FeaturedCardProps) {
  const url = getItemUrl(item);
  const cta = getCtaLabel(item);
  const source = getSource(item);

  if (variant === "large") {
    return (
      <article className="group flex h-full min-h-[420px] flex-col justify-between bg-[var(--dark-bg)] p-10 sm:p-12">
        <div>
          <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-[var(--dark-label)]">
            {source}
            <span className="mx-2">·</span>
            {item.year}
          </p>
          <h3 className="mt-8 font-serif text-3xl italic leading-[1.2] text-[var(--background)] sm:text-4xl">
            {item.title}
          </h3>
          <p className="mt-5 line-clamp-3 font-sans text-sm font-light leading-relaxed text-[var(--dark-body)]">
            {item.description}
          </p>
        </div>
        <Link
          href={url}
          target={url.startsWith("http") ? "_blank" : undefined}
          rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-10 inline-block font-sans text-sm font-light text-white underline underline-offset-4 transition-opacity duration-200 hover:opacity-50"
        >
          {cta} →
        </Link>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col justify-between border border-[var(--border)] bg-[var(--surface)] p-7">
      <div>
        <p className="font-sans text-[10px] font-light uppercase tracking-[0.28em] text-[var(--muted-text)]">
          {source}
          <span className="mx-2">·</span>
          {item.year}
        </p>
        <h3 className="mt-4 font-serif text-xl italic leading-snug text-[var(--heading)]">
          {item.title}
        </h3>
      </div>
      <Link
        href={url}
        target={url.startsWith("http") ? "_blank" : undefined}
        rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
        className="mt-6 font-sans text-xs font-light text-[var(--accent)] transition-opacity duration-200 hover:opacity-60"
      >
        {cta} →
      </Link>
    </article>
  );
}
