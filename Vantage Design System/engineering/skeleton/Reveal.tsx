"use client";
/**
 * components/motion/Reveal.tsx
 * Viewport-triggered enter animation. Uses LazyMotion's `m.*` so the runtime
 * stays at ~5kb. Pair siblings with <RevealStack> for staggered choreography.
 */
import * as React from "react";
import { m, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease } },
};
const fadeOnly = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.18, ease } },
};

type Props = HTMLMotionProps<"div"> & { delay?: number };

export const Reveal = React.forwardRef<HTMLDivElement, Props>(function Reveal(
  { delay = 0, children, ...rest },
  ref
) {
  const reduced = useReducedMotion();
  const variants = reduced ? fadeOnly : fadeUp;
  return (
    <m.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </m.div>
  );
});

export const RevealStack = ({
  children,
  stagger = 0.06,
  className,
}: { children: React.ReactNode; stagger?: number; className?: string }) => {
  const reduced = useReducedMotion();
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </m.div>
  );
};

/** Wrap your app once. Tree-shakes Framer down to its dom-animation slice. */
export { LazyMotion, domAnimation, m } from "framer-motion";
