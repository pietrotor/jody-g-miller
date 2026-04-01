"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScrollStaggerListProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollStaggerList({
  children,
  className,
}: ScrollStaggerListProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        shouldReduce
          ? {}
          : { visible: { transition: { staggerChildren: 0.08 } } }
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}
