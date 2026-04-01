"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function useFilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  return {
    activeType: searchParams.get("type") ?? undefined,
    activeCategory: searchParams.get("category") ?? undefined,
    activeYear: searchParams.get("year") ?? undefined,
    updateParam,
    clearAll,
  };
}
