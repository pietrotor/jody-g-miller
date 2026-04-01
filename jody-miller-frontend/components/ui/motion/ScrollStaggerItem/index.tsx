"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScrollStaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollStaggerItem({
  children,
  className,
}: ScrollStaggerItemProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        shouldReduce
          ? {}
          : {
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
