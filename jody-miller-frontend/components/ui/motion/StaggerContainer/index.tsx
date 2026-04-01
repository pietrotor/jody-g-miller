"use client";

import { motion } from "framer-motion";
import { STAGGER_CONTAINER_VARIANTS } from "../constants";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={STAGGER_CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
