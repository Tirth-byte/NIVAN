# 04 · Performance

Target: **Lighthouse 95+ mobile** on every public route, **TBT < 150ms**, **CLS < 0.05**, **LCP < 2.0s** on a slow 4G connection. Dashboard is authed; we relax LCP to 2.5s but hold the JS budget tighter.

## Budgets

| Route | First-load JS (gzip) | LCP | TBT | CLS |
|---|---|---|---|---|
| `/` (home) | ≤ 90kb | < 1.8s | < 100ms | < 0.02 |
| `/boost/[game]` | ≤ 130kb | < 2.0s | < 150ms | < 0.05 |
| `/(app)/overview` | ≤ 180kb | < 2.5s | < 200ms | < 0.05 |
| `/(app)/orders/[id]` | ≤ 220kb | < 2.5s | < 250ms | < 0.05 |

CI fails the build if any route exceeds budget. Use `@next/bundle-analyzer` + `size-limit`.

---

## Streaming & hydration

### Streaming map
- **Hero, ServicesGrid, Pricing, FAQ, Footer** — all RSC, all in the initial document. Zero suspense; they render in the first byte.
- **`<LiveOrderFeed>` (homepage trust strip)** — `<Suspense fallback={<TickerSkeleton/>}>`. Streams in over the same connection.
- **`/(app)/overview`** — page shell streams instantly. Each widget (`<ActiveOrders/>`, `<RecentMatches/>`, `<WalletSummary/>`) is its own `<Suspense>` boundary.
- **`/(app)/orders/[id]`** — order header streams first; chat history streams second; live SSE chat connects after hydration.

### Hydration islands
The marketing app is mostly static. Client islands:
1. `<MobileNavToggle>` — drawer state (lazy via `next/dynamic`).
2. `<PricingToggle>` — monthly/annual segmented control.
3. `<FAQAccordion>` — disclosure with motion.
4. `<TestimonialsCarousel>` — scroll-snap controls.

Each island is **<10kb** including its slice of Framer. The order configurator is the biggest island in the marketing app (~45kb after tree-shake) — that's the price of an interactive calculator and it's worth it.

### Dashboard hydration
The sidebar is server-rendered with one tiny client child (`<NavItem>`) for active state. The TopBar splits into three islands: `<NotificationsBell>`, `<GlobalSearch>`, `<UserMenu>`. Each is `next/dynamic({ ssr: false })` because they need browser APIs (focus management, hotkeys).

---

## Fonts

- **Self-hosted** Geist + Geist Mono via `next/font/local`. No CDN — saves the round trip and avoids FOUT.
- **Two weights** in production: 400 + 600. Display weights load on demand for marketing pages only via `display: 'swap'` and `preload: false`.
- **`size-adjust`** override in `@font-face` so the fallback (`-apple-system`) renders at the same x-height. Critical for CLS = 0.

```ts
// app/font.ts
import localFont from "next/font/local";
export const geist = localFont({
  src: [
    { path: "../public/fonts/Geist-Regular.woff2", weight: "400" },
    { path: "../public/fonts/Geist-SemiBold.woff2", weight: "600" },
  ],
  variable: "--font-display",
  display: "swap",
});
```

---

## Images

Every `<img>` goes through `next/image`. Rules:
- `priority` only on the LCP image (hero crest if used). Everything else lazy.
- `sizes` always set explicitly. No `100vw` unless it's truly full-bleed.
- AVIF first, WebP fallback, JPEG/PNG never shipped.
- Background "bloom" is a CSS radial gradient, **not** an image. (See `--grad-bloom`.)
- Rank crests are inline SVG components, not raster files.

For user avatars on testimonials & boosters: `next/image` with `unoptimized` proxied through our edge resizer (saves the runtime cost on Vercel).

---

## CSS

Tailwind v4 with the new Oxide engine. JIT only emits used classes. Final CSS is **<14kb gzipped** for the entire site.

- One stylesheet (`app/globals.css`) — no per-feature CSS files.
- Tailwind's `@layer base` for global resets + element defaults.
- No CSS-in-JS. No Emotion. No styled-components.
- Custom properties (`--surface-2`) are defined once in the `@theme` block and consumed by both Tailwind (`bg-surface-2`) and inline cases (`style={{ background: 'var(--surface-2)' }}`).

---

## Animations

See [`03-motion.md`](./03-motion.md). Performance specifics:
- Only `transform` and `opacity` are animated. Period.
- `LazyMotion` + `m.*` components everywhere — drops Framer to ~5kb runtime.
- The hero bloom is **CSS-only** (`--grad-bloom` radial gradient). No filter, no blur — those are GPU-expensive on mobile Safari.
- The marquee logo row is **CSS keyframes** with `transform: translateX()`. Never JS-driven.

---

## What we deliberately don't do

- **No parallax scroll** — kills mobile and trips reduced-motion.
- **No video backgrounds** — instant 200kb+ even at the lowest bitrate.
- **No `backdrop-filter` everywhere** — only on the sticky nav (one element). Backdrop blur is the single most expensive CSS property on mobile.
- **No noise textures, grain overlays, scanlines** — they require either a tiled image (extra request) or a heavy filter.
- **No interactive 3D** — Three.js, Spline, Rive eat the budget. If we ever want a hero ornament, render it server-side as an SVG.
- **No analytics on first load** — defer Posthog/Vercel Analytics to `requestIdleCallback`. Never block FCP for tracking.
- **No font icons** — `lucide-react` tree-shakes per import. Each icon is ~700 bytes.

---

## CI gates

```yaml
- size-limit: blocks PR if any route exceeds budget
- lighthouse-ci: blocks PR if mobile score drops below 90
- @axe-core/playwright: a11y violations block merge
- typescript --noEmit: zero `any`, zero implicit any
```
