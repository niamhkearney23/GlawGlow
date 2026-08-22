"use client";

import { LayoutGroup } from "framer-motion";
import type { ReactNode } from "react";

/** Lets the intro wordmark morph into the navbar wordmark (shared layoutId). */
export default function MotionShell({ children }: { children: ReactNode }) {
  return <LayoutGroup id="gg">{children}</LayoutGroup>;
}
