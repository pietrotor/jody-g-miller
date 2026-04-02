"use client";

import { useFilterBar } from "./hooks/useFilterBar";

interface FilterBarProps {
  categories: string[];
  years: number[];
}

const TYPES = ["article", "video", "podcast"] as const;

export default function FilterBar({ categories, years }: FilterBarProps) {
  const {
    activeType,
    activeCategory,
    activeYear,
    openDropdown,
    dropdownSearch,
    containerRef,
    updateParam,
    clearAll,
    toggleDropdown,
    closeDropdowns,
    setDropdownSearch,
  } = useFilterBar();

  const hasFilters = activeType || activeCategory || activeYear;

  return (
    <div ref={containerRef}>
      {/* ── Desktop layout (md+) ─────────────────────────────────────── */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between border-y border-border/30 py-1">
          {/* Left: Type tabs */}
          <div className="flex items-center gap-0">
            <button
              onClick={() => {
                updateParam("type", undefined);
                closeDropdowns();
              }}
              className={`relative px-4 py-3 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                !activeType
                  ? "font-normal text-heading"
                  : "font-light text-accent-sage/60 hover:text-heading"
              }`}
            >
              All
              {!activeType && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent" />
              )}
            </button>
            {TYPES.map((type) => (
              <button
                key={type}
                onClick={() => {
                  updateParam(
                    "type",
                    activeType === type ? undefined : type,
                  );
                  closeDropdowns();
                }}
                className={`relative px-4 py-3 font-sans text-[11px] capitalize tracking-wide transition-colors duration-200 ${
                  activeType === type
                    ? "font-normal text-heading"
                    : "font-light text-accent-sage/60 hover:text-heading"
                }`}
              >
                {type}
                {activeType === type && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* Right: Dropdown triggers + clear */}
          <div className="flex items-center gap-2">
            {/* Topic dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("topic")}
                className={`flex items-center gap-2 px-4 py-2.5 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                  activeCategory || openDropdown === "topic"
                    ? "font-normal text-heading"
                    : "font-light text-accent-sage/60 hover:text-heading"
                }`}
              >
                {activeCategory ?? "Topic"}
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-200 ${openDropdown === "topic" ? "rotate-180" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
                {activeCategory && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </button>

              {openDropdown === "topic" && (
                <div className="absolute right-0 top-full z-50 mt-1 min-w-[220px] border border-border/20 bg-background shadow-atmospheric">
                  <div className="border-b border-border/15 px-3 py-2">
                    <input
                      type="text"
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      placeholder="Search topics…"
                      autoFocus
                      className="w-full bg-transparent font-sans text-[11px] font-light text-heading placeholder:text-accent-sage/40 focus:outline-none"
                    />
                  </div>
                  <div className="max-h-[240px] overflow-y-auto py-1.5">
                    {!dropdownSearch && (
                      <button
                        onClick={() => {
                          updateParam("category", undefined);
                          closeDropdowns();
                        }}
                        className={`flex w-full items-center gap-2 px-4 py-2.5 text-left font-sans text-[11px] tracking-wide transition-colors duration-150 ${
                          !activeCategory
                            ? "font-normal text-heading"
                            : "font-light text-body hover:bg-surface-low hover:text-heading"
                        }`}
                      >
                        {!activeCategory && (
                          <span className="h-1 w-1 rounded-full bg-accent" />
                        )}
                        All Topics
                      </button>
                    )}
                    {categories
                      .filter((cat) =>
                        cat.toLowerCase().includes(dropdownSearch.toLowerCase()),
                      )
                      .map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            updateParam(
                              "category",
                              activeCategory === cat ? undefined : cat,
                            );
                            closeDropdowns();
                          }}
                          className={`flex w-full items-center gap-2 px-4 py-2.5 text-left font-sans text-[11px] tracking-wide transition-colors duration-150 ${
                            activeCategory === cat
                              ? "font-normal text-heading"
                              : "font-light text-body hover:bg-surface-low hover:text-heading"
                          }`}
                        >
                          {activeCategory === cat && (
                            <span className="h-1 w-1 rounded-full bg-accent" />
                          )}
                          {cat}
                        </button>
                      ))}
                    {categories.filter((cat) =>
                      cat.toLowerCase().includes(dropdownSearch.toLowerCase()),
                    ).length === 0 && (
                      <p className="px-4 py-3 font-sans text-[11px] font-light text-accent-sage/50">
                        No topics match
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <span className="h-3.5 w-px bg-border/30" />

            {/* Year dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("year")}
                className={`flex items-center gap-2 px-4 py-2.5 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                  activeYear || openDropdown === "year"
                    ? "font-normal text-heading"
                    : "font-light text-accent-sage/60 hover:text-heading"
                }`}
              >
                {activeYear ?? "Year"}
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-200 ${openDropdown === "year" ? "rotate-180" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
                {activeYear && (
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </button>

              {openDropdown === "year" && (
                <div className="absolute right-0 top-full z-50 mt-1 min-w-[160px] border border-border/20 bg-background shadow-atmospheric">
                  <div className="border-b border-border/15 px-3 py-2">
                    <input
                      type="text"
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      placeholder="Search year…"
                      autoFocus
                      className="w-full bg-transparent font-sans text-[11px] font-light text-heading placeholder:text-accent-sage/40 focus:outline-none"
                    />
                  </div>
                  <div className="max-h-[240px] overflow-y-auto py-1.5">
                    {!dropdownSearch && (
                      <button
                        onClick={() => {
                          updateParam("year", undefined);
                          closeDropdowns();
                        }}
                        className={`flex w-full items-center gap-2 px-4 py-2.5 text-left font-sans text-[11px] tracking-wide transition-colors duration-150 ${
                          !activeYear
                            ? "font-normal text-heading"
                            : "font-light text-body hover:bg-surface-low hover:text-heading"
                        }`}
                      >
                        {!activeYear && (
                          <span className="h-1 w-1 rounded-full bg-accent" />
                        )}
                        All Years
                      </button>
                    )}
                    {years
                      .filter((year) =>
                        String(year).includes(dropdownSearch),
                      )
                      .map((year) => (
                        <button
                          key={year}
                          onClick={() => {
                            updateParam(
                              "year",
                              activeYear === String(year)
                                ? undefined
                                : String(year),
                            );
                            closeDropdowns();
                          }}
                          className={`flex w-full items-center gap-2 px-4 py-2.5 text-left font-serif text-sm italic transition-colors duration-150 ${
                            activeYear === String(year)
                              ? "text-heading"
                              : "text-body hover:bg-surface-low hover:text-heading"
                          }`}
                        >
                          {activeYear === String(year) && (
                            <span className="h-1 w-1 rounded-full bg-accent" />
                          )}
                          {year}
                        </button>
                      ))}
                    {years.filter((year) =>
                      String(year).includes(dropdownSearch),
                    ).length === 0 && (
                      <p className="px-4 py-3 font-sans text-[11px] font-light text-accent-sage/50">
                        No years match
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Clear button */}
            {hasFilters && (
              <>
                <span className="h-3.5 w-px bg-border/30" />
                <button
                  onClick={clearAll}
                  className="px-3 py-2 font-sans text-[10px] font-light text-accent transition-opacity duration-200 hover:opacity-60"
                >
                  Clear
                </button>
              </>
            )}
          </div>
        </div>

        {/* Active filter pills — desktop */}
        {hasFilters && (
          <div className="flex items-center gap-2.5 py-3">
            <span className="font-sans text-[10px] font-light text-accent-sage/40">
              Showing
            </span>
            {activeType && (
              <button
                onClick={() => updateParam("type", undefined)}
                className="flex items-center gap-1.5 rounded-full bg-accent/8 px-3 py-1 font-sans text-[10px] font-normal capitalize text-accent transition-colors hover:bg-accent/15"
              >
                {activeType}
                <span className="text-[8px] text-accent/50">✕</span>
              </button>
            )}
            {activeCategory && (
              <button
                onClick={() => updateParam("category", undefined)}
                className="flex items-center gap-1.5 rounded-full bg-accent/8 px-3 py-1 font-sans text-[10px] font-normal text-accent transition-colors hover:bg-accent/15"
              >
                {activeCategory}
                <span className="text-[8px] text-accent/50">✕</span>
              </button>
            )}
            {activeYear && (
              <button
                onClick={() => updateParam("year", undefined)}
                className="flex items-center gap-1.5 rounded-full bg-accent/8 px-3 py-1 font-sans text-[10px] font-normal text-accent transition-colors hover:bg-accent/15"
              >
                {activeYear}
                <span className="text-[8px] text-accent/50">✕</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Mobile layout (<md) ──────────────────────────────────────── */}
      <div className="space-y-0 border-y border-border/30 md:hidden">
        {/* Type row */}
        <div className="flex items-stretch border-b border-border/15">
          <span className="flex w-18 shrink-0 items-center border-r border-border/15 py-3 pr-3 font-sans text-[10px] font-normal uppercase tracking-[0.14em] text-accent-sage">
            Format
          </span>
          <div className="no-scrollbar flex items-center gap-0 overflow-x-auto">
            <button
              onClick={() => updateParam("type", undefined)}
              className={`relative shrink-0 px-3.5 py-2 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                !activeType
                  ? "font-normal text-heading"
                  : "font-light text-accent-sage/60 hover:text-heading"
              }`}
            >
              All
              {!activeType && (
                <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent" />
              )}
            </button>
            {TYPES.map((type) => (
              <button
                key={type}
                onClick={() =>
                  updateParam(
                    "type",
                    activeType === type ? undefined : type,
                  )
                }
                className={`relative shrink-0 px-3.5 py-2 font-sans text-[11px] capitalize tracking-wide transition-colors duration-200 ${
                  activeType === type
                    ? "font-normal text-heading"
                    : "font-light text-accent-sage/60 hover:text-heading"
                }`}
              >
                {type}
                {activeType === type && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Topic row */}
        <div className="flex items-stretch border-b border-border/15">
          <span className="flex w-18 shrink-0 items-center border-r border-border/15 py-3 pr-3 font-sans text-[10px] font-normal uppercase tracking-[0.14em] text-accent-sage">
            Topic
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="no-scrollbar flex items-center gap-0 overflow-x-auto">
              <button
                onClick={() => updateParam("category", undefined)}
                className={`relative shrink-0 px-3.5 py-2 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                  !activeCategory
                    ? "font-normal text-heading"
                    : "font-light text-accent-sage/60 hover:text-heading"
                }`}
              >
                All
                {!activeCategory && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent" />
                )}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    updateParam(
                      "category",
                      activeCategory === cat ? undefined : cat,
                    )
                  }
                  className={`relative shrink-0 px-3.5 py-2 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                    activeCategory === cat
                      ? "font-normal text-heading"
                      : "font-light text-accent-sage/60 hover:text-heading"
                  }`}
                >
                  {cat}
                  {activeCategory === cat && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent" />
                  )}
                </button>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>

        {/* Year row */}
        <div className="flex items-stretch">
          <span className="flex w-18 shrink-0 items-center border-r border-border/15 py-3 pr-3 font-sans text-[10px] font-normal uppercase tracking-[0.14em] text-accent-sage">
            Year
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div className="no-scrollbar flex items-center gap-0 overflow-x-auto">
              <button
                onClick={() => updateParam("year", undefined)}
                className={`relative shrink-0 px-3.5 py-2 font-sans text-[11px] tracking-wide transition-colors duration-200 ${
                  !activeYear
                    ? "font-normal text-heading"
                    : "font-light text-accent-sage/60 hover:text-heading"
                }`}
              >
                All
                {!activeYear && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent" />
                )}
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
                  className={`relative shrink-0 px-3.5 py-2 font-serif text-sm italic tracking-normal transition-colors duration-200 ${
                    activeYear === String(year)
                      ? "text-heading"
                      : "text-accent-sage/50 hover:text-heading"
                  }`}
                >
                  {year}
                  {activeYear === String(year) && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent" />
                  )}
                </button>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>

        {/* Active filter pills — mobile */}
        {hasFilters && (
          <div className="flex items-center gap-2 border-t border-border/30 px-1 py-2.5">
            <div className="flex flex-1 flex-wrap gap-1.5">
              {activeType && (
                <button
                  onClick={() => updateParam("type", undefined)}
                  className="flex items-center gap-1 rounded-full bg-accent/8 px-2.5 py-0.5 font-sans text-[10px] font-normal capitalize text-accent"
                >
                  {activeType}
                  <span className="text-[8px] text-accent/50">✕</span>
                </button>
              )}
              {activeCategory && (
                <button
                  onClick={() => updateParam("category", undefined)}
                  className="flex items-center gap-1 rounded-full bg-accent/8 px-2.5 py-0.5 font-sans text-[10px] font-normal text-accent"
                >
                  {activeCategory}
                  <span className="text-[8px] text-accent/50">✕</span>
                </button>
              )}
              {activeYear && (
                <button
                  onClick={() => updateParam("year", undefined)}
                  className="flex items-center gap-1 rounded-full bg-accent/8 px-2.5 py-0.5 font-sans text-[10px] font-normal text-accent"
                >
                  {activeYear}
                  <span className="text-[8px] text-accent/50">✕</span>
                </button>
              )}
            </div>
            <button
              onClick={clearAll}
              className="shrink-0 font-sans text-[10px] font-light text-accent-sage/40"
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
