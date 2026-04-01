"use client";

import { motion } from "framer-motion";
import { STAGGER_ITEM_VARIANTS } from "../constants";

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={STAGGER_ITEM_VARIANTS}>
      {children}
    </motion.div>
  );
}
