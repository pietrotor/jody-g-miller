"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedLineProps {
  className?: string;
}

export default function AnimatedLine({ className }: AnimatedLineProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={`h-px bg-accent opacity-40 origin-left ${className ?? ""}`}
      initial={shouldReduce ? { scaleX: 1 } : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
