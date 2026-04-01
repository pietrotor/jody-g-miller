"use client";

import { useFilterBar } from "./hooks/useFilterBar";

interface FilterBarProps {
  categories: string[];
  years: number[];
}

const TYPES = ["article", "video", "podcast"] as const;

export default function FilterBar({ categories, years }: FilterBarProps) {
  const { activeType, activeCategory, activeYear, updateParam, clearAll } =
    useFilterBar();

  const hasFilters = activeType || activeCategory || activeYear;

  return (
    <div className="space-y-4 font-sans text-xs font-light">
      {/* Type */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="ui-label text-accent-sage w-16">Type</span>
        <button
          onClick={() => updateParam("type", undefined)}
          className={`ui-label px-3 py-1 transition-colors ${
            !activeType
              ? "text-heading border border-border/40"
              : "text-accent-sage hover:text-heading"
          }`}
        >
          All
        </button>
        {TYPES.map((type) => (
          <button
            key={type}
            onClick={() => updateParam("type", activeType === type ? undefined : type)}
            className={`ui-label px-3 py-1 capitalize transition-colors ${
              activeType === type
                ? "text-heading border border-border/40"
                : "text-accent-sage hover:text-heading"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Category */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="ui-label text-accent-sage w-16">Category</span>
        <button
          onClick={() => updateParam("category", undefined)}
          className={`ui-label px-3 py-1 transition-colors ${
            !activeCategory
              ? "text-heading border border-border/40"
              : "text-accent-sage hover:text-heading"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => updateParam("category", activeCategory === cat ? undefined : cat)}
            className={`ui-label px-3 py-1 transition-colors ${
              activeCategory === cat
                ? "text-heading border border-border/40"
                : "text-accent-sage hover:text-heading"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Year */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="ui-label text-accent-sage w-16">Year</span>
        <button
          onClick={() => updateParam("year", undefined)}
          className={`ui-label px-3 py-1 transition-colors ${
            !activeYear
              ? "text-heading border border-border/40"
              : "text-accent-sage hover:text-heading"
          }`}
        >
          All
        </button>
        {years.map((year) => (
          <button
            key={year}
            onClick={() =>
              updateParam(
                "year",
                activeYear === String(year) ? undefined : String(year),
              )
            }
            className={`ui-label px-3 py-1 transition-colors ${
              activeYear === String(year)
                ? "text-heading border border-border/40"
                : "text-accent-sage hover:text-heading"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clearAll}
          className="ui-label text-accent transition-opacity hover:opacity-60"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
