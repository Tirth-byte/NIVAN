# Vantage — Frontend Engineering Handoff

Production architecture for Vantage built on **Next.js 15 (App Router) · TypeScript · Tailwind v4 · shadcn/ui · Framer Motion**.

This folder is the engineering counterpart to the design system at the project root. The HTML files in `ui_kits/` are the visual source of truth; the code in here is the production translation.

## Index

| File | What's in it |
|---|---|
| [`01-architecture.md`](./01-architecture.md) | Folder structure, RSC strategy, layout system, routing |
| [`02-components.md`](./02-components.md) | Component catalogue with variants, props, accessibility notes |
| [`03-motion.md`](./03-motion.md) | Framer Motion architecture, primitives, when not to animate |
| [`04-performance.md`](./04-performance.md) | Lighthouse strategy: streaming, hydration, fonts, images |
| [`05-responsive.md`](./05-responsive.md) | Breakpoints, container queries, mobile-first patterns |
| [`06-visual-refinement.md`](./06-visual-refinement.md) | Spacing rhythm, glow intensity, hover/press refinement |
| `tailwind.config.ts` | Token wiring (semantic + brand) |
| `globals.css` | CSS-first Tailwind v4 setup with `@theme` |
| `skeleton/` | Representative TSX components (Button, Card, MotionFade, Sidebar) |

## Read order
1. **`01-architecture.md`** — orient on the folder layout and Server vs Client decisions.
2. **`tailwind.config.ts` + `globals.css`** — the token bridge between design tokens and code.
3. **`02-components.md`** — start picking components apart; cross-reference `skeleton/`.
4. **`04-performance.md`** — read before writing anything new; the budgets gate every PR.

## Non-negotiables
- **No client JS in marketing sections** unless the section needs state (configurator, FAQ accordion, mobile nav). Hero, services grid, social proof, testimonials, footer = RSC.
- **One motion library**: Framer Motion. No GSAP, no Lottie, no parallax libs.
- **One icon set**: `lucide-react`, tree-shaken per import.
- **Tokens, not literals**: never write `bg-[#0E1014]`. Every value comes from `tailwind.config.ts`.
- **Mobile-first**: design at 375 first, scale up. Desktop-only effects (parallax bloom, hover-only motion) gracefully degrade.
