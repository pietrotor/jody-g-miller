"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export function useFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownSearch, setDropdownSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const updateParam = useCallback(
    (key: string, value: string | undefined) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const clearAll = useCallback(() => {
    router.push(pathname);
  }, [pathname, router]);

  const toggleDropdown = useCallback(
    (name: string) => {
      setOpenDropdown((prev) => {
        setDropdownSearch("");
        return prev === name ? null : name;
      });
    },
    [],
  );

  const closeDropdowns = useCallback(() => {
    setOpenDropdown(null);
    setDropdownSearch("");
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    activeType: searchParams.get("type") ?? undefined,
    activeCategory: searchParams.get("category") ?? undefined,
    activeYear: searchParams.get("year") ?? undefined,
    openDropdown,
    dropdownSearch,
    containerRef,
    updateParam,
    clearAll,
    toggleDropdown,
    closeDropdowns,
    setDropdownSearch,
  };
}
