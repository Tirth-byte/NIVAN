# 01 · Architecture

## Folder structure

```
vantage/
├── app/                          # Next.js 15 App Router — all routes
│   ├── (marketing)/              # Public site (RSC by default)
│   │   ├── layout.tsx            # Marketing chrome (Nav, Footer)
│   │   ├── page.tsx              # Home
│   │   ├── boost/[game]/page.tsx # Service / order flow
│   │   ├── pricing/page.tsx
│   │   └── legal/[slug]/page.tsx
│   ├── (app)/                    # Authed dashboard
│   │   ├── layout.tsx            # Sidebar + TopBar shell (server)
│   │   ├── overview/page.tsx
│   │   ├── orders/page.tsx
│   │   ├── orders/[id]/page.tsx  # Live order — uses Suspense + streaming
│   │   ├── wallet/page.tsx
│   │   ├── support/page.tsx
│   │   └── settings/page.tsx
│   ├── (auth)/                   # Login / signup / forgot
│   ├── api/                      # Route handlers — webhooks, server actions thin shim
│   ├── opengraph-image.tsx       # Edge-rendered OG cards
│   └── globals.css               # Tailwind v4 + tokens
│
├── components/                   # Cross-feature primitives & shells
│   ├── ui/                       # shadcn/ui primitives (Button, Input, Dialog…)
│   ├── motion/                   # Framer wrappers (Reveal, Marquee, FloatCard)
│   ├── layout/                   # Container, Section, Grid, Stack
│   ├── brand/                    # Logo, GradientBloom, RankCrest
│   └── nav/                      # MarketingNav, AppSidebar, MobileNav
│
├── features/                     # Feature-scoped composition
│   ├── hero/                     # HeroPanel + supporting cards
│   ├── services-grid/
│   ├── pricing/
│   ├── order-configurator/       # The big one — fully client
│   ├── live-order/               # Dashboard live order + chat
│   ├── wallet/
│   └── testimonials/
│
├── lib/
│   ├── api/                      # Typed server actions / fetchers
│   ├── pricing.ts                # Pure pricing math — shared client+server
│   ├── format.ts                 # Currency, duration, rank formatters
│   ├── cn.ts                     # clsx + twMerge
│   └── env.ts                    # zod-validated env
│
├── hooks/
│   ├── use-mounted.ts
│   ├── use-media-query.ts
│   ├── use-prefers-reduced-motion.ts
│   └── use-live-feed.ts          # SSE / WebSocket subscription
│
├── styles/
│   └── tailwind.css              # @import "tailwindcss"; (re-exports app/globals)
│
├── config/
│   ├── site.ts                   # Brand metadata
│   ├── nav.ts                    # Marketing + app nav arrays
│   ├── games.ts                  # Supported games + rank tiers
│   └── pricing.ts                # Service tiers, modifiers
│
├── content/                      # MDX for blog/legal/changelog
│   ├── blog/
│   ├── legal/
│   └── changelog/
│
├── public/
│   ├── fonts/                    # Self-hosted .woff2 (Geist, Geist Mono)
│   ├── icons/                    # Static SVGs (logo mark, game crests)
│   └── og/                       # Static OG fallbacks
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

### Why this split
- `components/` is **product-agnostic** (could be lifted into a different SaaS unchanged).
- `features/` is **product-aware** — it owns business logic, copy, layout decisions.
- `app/` is **route-aware only** — pages compose features, never hand-roll UI.

A homepage section never lives in `app/`. It lives in `features/hero/`, exported as `<HeroPanel/>`, and the route file is `<HeroPanel/><ServicesGrid/><Pricing/>` etc.

---

## Server vs Client components

| Component | Type | Rationale |
|---|---|---|
| `MarketingNav` | **Server** (with a small `<MobileNavToggle>` client island) | Mostly static; mobile drawer is the only stateful bit |
| `Hero` | **Server** | Static copy + CSS-only gradient; no JS |
| `ServicesGrid` | **Server** | Static cards; hover is CSS-only |
| `LiveOrderTicker` | **Client** | SSE subscription |
| `OrderConfigurator` | **Client** | Heavy state, live price calc |
| `RankSelector` | **Client** | Stateful selection |
| `PricingTable` | **Server** with **Client** annual/monthly toggle island | Most pixels are server-rendered |
| `FAQAccordion` | **Client** | Disclosure state — but use `<details>` if you can avoid client |
| `Testimonials` | **Server** + small **Client** carousel | Cards are static; only the scroll snap is client |
| `Footer` | **Server** | Always |
| `AppSidebar` | **Server** | Active route detected via `usePathname` in a tiny client child |
| `TopBar` | **Server** with **Client** `<NotificationsBell>` & `<GlobalSearch>` | Split the islands |
| `Overview` (dashboard) | **Server** for layout, **Client** for `<ChatPanel>`, `<LiveProgressRing>` | Stream stats from server |
| `OrderDetail` | **Server** shell + **Client** chat + live progress | Use `Suspense` to stream the match feed |
| `Settings` forms | **Client** | RHF + zod |

**Rule of thumb:** the default is `'use server'` (RSC). You earn `'use client'` by needing one of: state, effects, browser APIs, event handlers. A single client island inside an otherwise-server tree is preferred over flipping the whole tree client.

### Lazy loading
- `next/dynamic` with `ssr: false` for: `<OrderConfigurator>` modals, `<ChatPanel>`, `<NotificationsCenter>`, `<EmojiPicker>`-like things.
- Lazy-load the **Framer Motion module** itself in motion-heavy features. `components/motion/index.ts` re-exports a `LazyMotion` boundary so only the leaf views ship the runtime.

```tsx
// components/motion/Provider.tsx
"use client";
import { LazyMotion, domAnimation } from "framer-motion";
export const MotionProvider = ({ children }) => (
  <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
);
```

Wrap the app shell once. Use `m.div` instead of `motion.div` everywhere — avoids dragging the full feature bundle into RSCs that touch motion via children.

---

## Routing & layouts

- **Two route groups**: `(marketing)` and `(app)`. Each has its own `layout.tsx` so the marketing pages don't pay the cost of the app sidebar bundle, and vice versa.
- **No global layout state**. Auth user is fetched per-segment via a cached `getUser()` in `lib/auth.ts`.
- **Loading UIs**: every dashboard route ships a `loading.tsx` with skeleton cards (no spinners).
- **Error boundaries**: `error.tsx` per segment with a quiet "Something went sideways" + retry. No stack traces in prod.
- **Streaming**: `<Suspense>` around: `<LiveOrderFeed>`, `<RecentMatches>`, `<WalletTransactions>`. Static chrome paints in <500ms; data streams in.

---

## Theme & token organization

Single source of truth: `tailwind.config.ts`. CSS variables (defined in `globals.css` via `@theme`) feed both Tailwind's `bg-surface-2` utilities AND raw `var(--surface-2)` for inline cases.

```
Design tokens (root project)        →  globals.css @theme block       →  tailwind utilities
colors_and_type.css                                                       (bg-surface-2, text-primary…)
                                                                      ↘
                                                                       inline style fallback
                                                                       (var(--surface-2))
```

Don't duplicate. The Tailwind config **reads** from CSS vars; it doesn't redefine them.

---

## Breakpoint strategy

Mobile-first. Five breakpoints, all defined as CSS vars (so they're queryable from JS too).

```ts
screens: {
  sm: "480px",   // large phone
  md: "768px",   // tablet portrait
  lg: "1024px",  // tablet landscape / small laptop
  xl: "1280px",  // desktop
  "2xl": "1536px", // wide desktop
}
```

**Container queries** for cards that re-flow inside variable parents — `<OrderRow>`, `<StatCard>`, `<ChatBubble>`. Use `@container/card` and `@sm:flex-row` at the card root, not the page.

See [`05-responsive.md`](./05-responsive.md) for the full pattern catalogue.
