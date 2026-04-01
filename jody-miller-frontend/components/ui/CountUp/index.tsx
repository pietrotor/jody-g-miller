"use client";

import { useCountUp } from "./hooks/useCountUp";

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function CountUp({
  end,
  start = 0,
  duration = 2,
  suffix = "",
  prefix = "",
}: CountUpProps) {
  const { count, ref } = useCountUp({ end, start, duration });

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
