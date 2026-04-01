"use client";

import { useRef } from "react";

export function useSelectedWorks() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollNext = () => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return { trackRef, scrollPrev, scrollNext };
}
