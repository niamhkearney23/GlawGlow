"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

type Variant = "up" | "wipe" | "fade" | "scale";
type Props = { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" | "figure"; variant?: Variant };

const variants = {
  up:    { hidden: { opacity: 0, y: 32 },                       show: { opacity: 1, y: 0 } },
  fade:  { hidden: { opacity: 0 },                              show: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.96 },                 show: { opacity: 1, scale: 1 } },
  wipe:  { hidden: { clipPath: "inset(100% 0 0 0)" },           show: { clipPath: "inset(0% 0 0 0)" } },
};

/** Scroll-triggered reveal. variant: up (default) | fade | scale | wipe (image curtain). */
export default function Reveal({ children, delay = 0, className = "", as = "div", variant = "up" }: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: variant === "wipe" ? 1.1 : 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Tag>
  );
}

/** Children animate in one after another. Wrap items in <Stagger.Item>. */
export function Stagger({ children, className = "", gap = 0.08 }: { children: ReactNode; className?: string; gap?: number }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-10% 0px" }} transition={{ staggerChildren: gap }}>
      {children}
    </motion.div>
  );
}
export function StaggerItem({ children, className = "", as = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={variants.up} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </Tag>
  );
}

/** Image that drifts slower than the page (parallax). */
export function Parallax({ children, className = "", amount = 60 }: { children: ReactNode; className?: string; amount?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-[calc(100%+120px)] -mt-[60px]">{children}</motion.div>
    </div>
  );
}
