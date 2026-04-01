"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FADE_UP_VARIANTS, EASE_OUT } from "../constants";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className,
}: FadeUpProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduce ? "visible" : "hidden"}
      animate="visible"
      variants={FADE_UP_VARIANTS}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
