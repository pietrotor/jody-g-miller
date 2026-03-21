"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({
  end,
  suffix = "",
  duration = 1400,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldReduce) {
      setCount(end);
      return;
    }
    if (!isInView) return;

    const startTime = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCount(end);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration, shouldReduce]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
