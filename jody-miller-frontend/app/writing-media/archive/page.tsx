import { Suspense } from "react";
import type { Metadata } from "next";
import { fetchArchiveItems } from "@/lib/strapi";
import { archiveItems as fallbackItems } from "@/lib/mock-data";
import type { ContentType } from "@/lib/types";
import ArchiveCard from "@/components/archive/ArchiveCard";
import FilterBar from "@/components/archive/FilterBar";
import {
  FadeUp,
  AnimatedLine,
  RevealOnScroll,
  ScrollStaggerList,
  ScrollStaggerItem,
} from "@/components/ui/motion";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "The complete archive of Jody Greenstone Miller's articles, videos, and podcast appearances — filterable by type, category, and year.",
};

interface ArchivePageProps {
  searchParams: Promise<{
    type?: string;
    category?: string;
    year?: string;
  }>;
}

export default async function TheArchivePage({
  searchParams,
}: ArchivePageProps) {
  const params = await searchParams;

  const archiveItems = await fetchArchiveItems().catch(() => fallbackItems);

  const activeType = params.type as ContentType | undefined;
  const activeCategory = params.category;
  const activeYear = params.year ? parseInt(params.year) : undefined;

  let filtered = [...archiveItems];
  if (activeType) filtered = filtered.filter((i) => i.type === activeType);
  if (activeCategory)
    filtered = filtered.filter((i) => i.category === activeCategory);
  if (activeYear) filtered = filtered.filter((i) => i.year === activeYear);

  const sorted = filtered.sort(
    (a, b) =>
      b.year - a.year ||
      new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const categories = [...new Set(archiveItems.map((i) => i.category))].sort();
  const years = [...new Set(archiveItems.map((i) => i.year))].sort(
    (a, b) => b - a,
  );

  const counts = {
    total: archiveItems.length,
    articles: archiveItems.filter((i) => i.type === "article").length,
    videos: archiveItems.filter((i) => i.type === "video").length,
    podcasts: archiveItems.filter((i) => i.type === "podcast").length,
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      {/* Header */}
      <FadeUp>
        <p className="font-sans text-xs font-light uppercase tracking-[0.22em] text-[var(--muted-text)]">
          Writing &amp; Media
        </p>
      </FadeUp>
      <FadeUp delay={0.08} className="mt-4">
        <AnimatedLine />
      </FadeUp>
      <FadeUp delay={0.15} className="mt-6">
        <h1 className="font-serif text-5xl italic leading-tight text-[var(--heading)] sm:text-6xl">
          The Archive
        </h1>
      </FadeUp>
      <FadeUp delay={0.22} className="mt-4">
        <p className="font-sans text-sm font-light text-[var(--muted-text)]">
          {counts.total} items — {counts.articles} articles, {counts.videos}{" "}
          videos, {counts.podcasts} podcasts
        </p>
      </FadeUp>

      {/* Filters */}
      <RevealOnScroll className="mt-12">
        <Suspense fallback={null}>
          <FilterBar categories={categories} years={years} />
        </Suspense>
      </RevealOnScroll>

      {/* Results count */}
      {(activeType || activeCategory || activeYear) && (
        <RevealOnScroll className="mt-6">
          <p className="font-sans text-xs font-light text-[var(--muted-text)]">
            {sorted.length === 0
              ? "No items match the selected filters."
              : `Showing ${sorted.length} item${sorted.length === 1 ? "" : "s"}`}
          </p>
        </RevealOnScroll>
      )}

      {/* List */}
      <div className="mt-8">
        {sorted.length === 0 ? (
          <p className="py-16 text-center font-sans text-sm font-light text-[var(--muted-text)]">
            No items found.
          </p>
        ) : (
          <ScrollStaggerList
            key={`${activeType ?? "all"}-${activeCategory ?? "all"}-${activeYear ?? "all"}`}
          >
            {sorted.map((item) => (
              <ScrollStaggerItem key={item.id}>
                <ArchiveCard item={item} />
              </ScrollStaggerItem>
            ))}
          </ScrollStaggerList>
        )}
      </div>
    </div>
  );
}
