# 03 · Motion

Single library: **Framer Motion**. Loaded via `LazyMotion` so the runtime is ~5kb, not 35kb. Single curve everywhere: `cubic-bezier(0.22, 1, 0.36, 1)` (the `--ease` token).

## Philosophy

Motion in Vantage is **subtle, brief, and earnable**. The default is no motion. Animations exist to:
1. Confirm a state change (toggle, page enter, form submit).
2. Establish hierarchy on first paint (reveal-in-sequence for hero copy).
3. Communicate liveness (LP gained ticker, live-dot pulse, progress bar fill).

Motion never:
- Loops decoratively for >2 cycles (no perpetual marquees outside a marquee logo strip).
- Translates more than 8px.
- Lasts longer than 600ms (except progress bars and live-feed enters, which can stretch).
- Fires on hover for non-interactive elements.

If a user has `prefers-reduced-motion: reduce`, all transforms collapse to opacity-only fades (max 120ms). Use `useReducedMotion()` and a shared `getReducedVariants()` helper.

---

## Architecture

### LazyMotion provider
`components/motion/Provider.tsx` wraps the app once. Use `m.div`, not `motion.div`. This drops the runtime from 32kb to 4.6kb.

### Primitives
All in `components/motion/`:
- `<Reveal>` — fade + 8px-up on enter, viewport-triggered, stagger-aware.
- `<RevealStack>` — wraps children in a stagger container with 60ms delay between.
- `<FadeIn>` — opacity-only; the reduced-motion fallback for everything.
- `<MarqueeRow>` — infinite horizontal scroll for logo strips. Pure CSS, no JS.
- `<FloatCard>` — gentle Y-bob (4px, 6s ease-in-out infinite). Used sparingly on hero cards. Pure CSS.
- `<LayoutSwap layoutId>` — wraps Radix `Tabs.Trigger` indicator etc. for shared-element pill animation.
- `<NumberRoll value>` — animates a digit change in tabular figures (LP counter, price recalc). Uses `motion.span` per digit.

### Variants (shared)
`lib/motion.ts`:
```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};
export const stagger = (stagger = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
});
```

Every animated component imports from this file. Don't define one-off variants inline.

---

## When to use Framer

Yes:
- Page-enter reveal sequences (hero copy + CTA + cards stagger in over 700ms total).
- FAQ accordion open/close (height + opacity).
- Tab indicator slide (`layoutId`).
- Toast enter/exit.
- Modal / drawer enter/exit.
- Number rolls on price recalc.
- Order-progress bar fill on first paint.

No (use CSS):
- Hover brightens, scale-on-press, focus rings — `transition` property.
- Live-dot pulse, marquee scroll, hero gradient bloom.
- Floating-card Y-bob — `@keyframes`.
- Skeleton shimmer — `@keyframes`.

The line: if it runs once on mount or in response to an event, Framer. If it runs forever, CSS.

---

## Performance rules

- **Animate transform & opacity only** — never `width`, `height`, `top`, `left`. For accordion height, animate `gridTemplateRows: "0fr" → "1fr"` (the modern trick) or use Radix's built-in animation hooks with `auto` height + `animate-presence`.
- **`will-change` is a last resort** — Framer adds it during animation and removes it after. Don't add manually except on the hero gradient bloom.
- **Disable animations during route transitions** — wrap the layout's `MotionProvider` so it remounts; Framer cleans up animations cleanly.
- **`transformTemplate`** for any compound transform; lets the GPU compose them in one layer.
- **Viewport triggers**: always `viewport={{ once: true, margin: "-10%" }}`. Don't re-fire on scroll.

---

## Timing tokens

```ts
duration: {
  micro: 0.12,  // hover, focus
  sm:    0.22,  // micro-interactions, toast
  md:    0.38,  // reveals, accordion, modal
  lg:    0.6,   // page-level enters, progress fill
}
```

Use these as `transition.duration`, not arbitrary numbers. Inconsistent timing is the #1 thing that breaks "premium feel".

---

## Reduced motion

Every motion primitive accepts `prefersReducedMotion` from a context. Behavior:
- Translates → 0
- Scales → 1
- Durations → max 0.12s
- Opacity transitions still play (they don't trigger vestibular issues)

Implementation: `useReducedMotion()` once at the provider, push into context, every `m.div` reads from it via the `Reveal`/`FadeIn` primitives. Don't sprinkle `useReducedMotion` in every component.
