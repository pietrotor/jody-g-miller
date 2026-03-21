"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Fade-Up: on mount (hero elements) ───────────────────────────────────────
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Reveal on Scroll: triggered when entering viewport ───────────────────────
export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Container: coordinates children stagger ─────────────────────────
export function StaggerContainer({
  children,
  className,
  delayStart = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delayStart?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={
        reduced
          ? {}
          : {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: delayStart,
                },
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={
        reduced
          ? {}
          : {
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated horizontal rule (draws itself left→right) ──────────────────────
export function AnimatedLine({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`h-px bg-[var(--accent)] ${className ?? ""}`}
      initial={reduced ? false : { scaleX: 0, originX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      style={{ transformOrigin: "left" }}
    />
  );
}

// ─── Scroll Stagger List: reveals each child sequentially on scroll ───────────
export function ScrollStaggerList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={
        reduced
          ? {}
          : {
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={
        reduced
          ? {}
          : {
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
