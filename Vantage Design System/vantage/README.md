# Vantage

Premium game-boosting & coaching SaaS — production Next.js 15 app.

## Stack

- **Next.js 15** (App Router, RSC by default, Turbo dev)
- **React 19** · **TypeScript** strict
- **Tailwind CSS v4** (Oxide engine, `@theme` tokens, no `tailwind.config.ts`)
- **shadcn/ui** (Radix primitives, cva variants)
- **Framer Motion** (lazy-loaded via `LazyMotion` + `m.*`)
- **lucide-react** (tree-shaken icons)
- **sonner** (toasts), **vaul** (mobile drawer)

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open <http://localhost:3000>. Routes:
- `/` — marketing homepage
- `/pricing` — pricing
- `/boost/league-of-legends` — service / order flow
- `/overview` — dashboard
- `/orders` — orders list

## Architecture

```
app/
  (marketing)/      # public site — RSC
  (app)/            # authed dashboard
components/
  ui/               # shadcn primitives
  motion/           # Framer wrappers (LazyMotion)
  brand/            # Logo, GradientBloom, RankCrest, LiveDot
  nav/              # MarketingNav, Footer, AppSidebar, TopBar
features/           # composed product UI by domain
lib/                # cn, motion variants, formatters
config/             # site, nav, games, pricing
hooks/
public/fonts/       # self-hosted Geist
```

See `engineering/` (project root) for full architecture, motion, performance, and visual-refinement docs.

## Performance budgets

| Route | First-load JS (gzip) | LCP | TBT |
|---|---|---|---|
| `/` | ≤ 90kb | < 1.8s | < 100ms |
| `/boost/[game]` | ≤ 130kb | < 2.0s | < 150ms |
| `/(app)/overview` | ≤ 180kb | < 2.5s | < 200ms |

## Conventions

- Default export is **server component**. Add `"use client"` only when state, effects, browser APIs, or event handlers are needed.
- Tokens live in `app/globals.css` `@theme`. Never write `bg-[#hex]`.
- Motion uses `m.*` (not `motion.*`) — keeps the runtime at ~5kb.
- `cn(...)` for class merging, `cva(...)` for variants.
- One feature directory per domain; pages compose features only.

## Notes for first run

Self-hosted Geist `.woff2` files belong in `public/fonts/`. `app/font.ts` references `Geist-Regular.woff2`, `Geist-SemiBold.woff2`, `Geist-Bold.woff2`, `GeistMono-Regular.woff2`. Convert from the variable TTF (`fonts/Geist-VariableFont_wght.ttf` at the project root) with `fonttools` or any web-font generator, then drop them in.
