"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface FilterBarProps {
  categories: string[];
  years: number[];
}

const TYPES = ["all", "article", "video", "podcast"] as const;

function FilterGroup({
  label,
  paramKey,
  options,
  active,
  onChange,
}: {
  label: string;
  paramKey: string;
  options: string[];
  active: string;
  onChange: (key: string, value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <span className="w-24 shrink-0 font-sans text-xs font-light text-[var(--muted-text)]">
        {label}
      </span>
      <button
        onClick={() => onChange(paramKey, "all")}
        className={`font-sans text-xs transition-colors ${
          active === "all"
            ? "font-normal text-[var(--heading)] underline underline-offset-2"
            : "font-light text-[var(--muted-text)] hover:text-[var(--heading)]"
        }`}
      >
        All
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(paramKey, opt)}
          className={`font-sans text-xs transition-colors ${
            active === opt
              ? "font-normal text-[var(--heading)] underline underline-offset-2"
              : "font-light text-[var(--muted-text)] hover:text-[var(--heading)]"
          }`}
        >
          {opt.charAt(0).toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default function FilterBar({ categories, years }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeType = searchParams.get("type") ?? "all";
  const activeCategory = searchParams.get("category") ?? "all";
  const activeYear = searchParams.get("year") ?? "all";

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  return (
    <div className="space-y-3 border-b border-[var(--border)] pb-8">
      <FilterGroup
        label="Type"
        paramKey="type"
        options={TYPES.slice(1) as unknown as string[]}
        active={activeType}
        onChange={updateFilter}
      />
      <FilterGroup
        label="Category"
        paramKey="category"
        options={categories}
        active={activeCategory}
        onChange={updateFilter}
      />
      <FilterGroup
        label="Year"
        paramKey="year"
        options={years.map(String)}
        active={activeYear}
        onChange={updateFilter}
      />
    </div>
  );
}
