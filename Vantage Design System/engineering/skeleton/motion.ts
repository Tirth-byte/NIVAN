/**
 * lib/motion.ts — shared Framer variants. Import these, don't inline-define.
 */
export const ease = [0.22, 1, 0.36, 1] as const;

export const dur = {
  micro: 0.12,
  sm: 0.22,
  md: 0.38,
  lg: 0.6,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: dur.md, ease } },
};
export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: dur.sm, ease } },
};
export const stagger = (childStagger = 0.06) => ({
  hidden: {},
  show:   { transition: { staggerChildren: childStagger, delayChildren: 0.05 } },
});

export const dialogEnter = {
  initial: { opacity: 0, y: 4, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: dur.sm, ease } },
  exit:    { opacity: 0, y: 4, scale: 0.98, transition: { duration: dur.micro, ease } },
};
