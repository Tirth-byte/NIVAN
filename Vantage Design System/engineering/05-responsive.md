# 05 · Responsive

Mobile-first. We design at 375 first; everything scales up.

## Breakpoints

```ts
sm:  480px,   // large phone (rare layout shift)
md:  768px,   // tablet portrait — first significant reflow
lg:  1024px,  // tablet landscape / small laptop — sidebar appears
xl:  1280px,  // desktop — final widths lock
2xl: 1536px,  // wide desktop — gutters grow, content doesn't
```

Default is mobile. Every utility is `md:`, `lg:` etc. — never `max-md:` (that's a desktop-first inversion).

## Layout patterns

### Marketing container
```tsx
<div className="mx-auto w-full max-w-[var(--container-marketing)] px-5 md:px-8 lg:px-12">
```
Padding scales: 20 → 32 → 48. Max width caps at 1200px.

### App container
```tsx
<div className="mx-auto w-full max-w-[var(--container-app)] px-4 md:px-6 lg:px-8">
```
Wider cap (1440), tighter gutters because the sidebar already eats horizontal space.

### Hero — mobile to desktop
- **<md**: single column, copy stacks above the floating cards. Cards become a horizontal scroll-snap row.
- **md+**: two columns 1.2fr 1fr — copy left, cards right.
- **xl+**: column ratio relaxes to 1fr 1fr; cards spread.

### Services grid
- **<md**: 1 column.
- **md**: 2 columns.
- **lg+**: 3 columns.
Card aspect locks to `aspect-[4/3]` until `lg`, then frees up.

### Pricing
- **<md**: stacked, full-width cards. Highlighted tier is **first**, not middle (mobile reads top-to-bottom).
- **md**: 3 columns, highlight in the middle, scaled 1.04x with brand-glow halo.

### Dashboard
- **<lg**: sidebar collapses to bottom-tab navigation (`<MobileNav>`). Top bar shrinks to a 56h compact bar.
- **lg+**: sidebar is fixed 248px on the left.
- **xl+**: secondary panels (chat, notifications) can pop into a 320px right rail.

### Order configurator
- **<md**: single column. Sticky summary becomes a **bottom sheet** with a "View order" tab — tapping expands it. Total + CTA always visible at the bottom edge.
- **md**: rank selectors stack 2-up, configurator flows below, summary sticks to the right.
- **lg+**: full split as designed in the kit.

---

## Container queries

Use container queries when a component appears in **multiple-width contexts** within the same page:

```tsx
<article className="@container/order">
  <div className="flex flex-col @md/order:flex-row gap-3 @md/order:gap-6">
    <RankCrest />
    <OrderMeta />
    <ProgressBar className="w-full @md/order:w-[120px]" />
  </div>
</article>
```

Components that use `@container`:
- `<OrderRow>` — appears in dashboard list (~600px wide) and homepage live ticker (~320px).
- `<StatCard>` — 1col on mobile, 4col on desktop, 2col inside the wallet panel.
- `<TestimonialCard>` — carousel item on mobile, grid item on desktop.
- `<ChatBubble>` — width depends on column count.

Don't use container queries for page-level layout — that's what breakpoints are for.

---

## Touch targets

- Minimum 44×44 hit area on anything tappable. Use invisible padding (`p-2`) around small icons rather than enlarging the icon.
- Primary CTA on mobile is **48h minimum** with `text-base` (16px), never smaller. Shrinking the CTA on mobile is the #1 conversion killer we've identified.
- Sticky bottom-bar CTA on the order page sits above the safe-area inset — `pb-[max(env(safe-area-inset-bottom),16px)]`.
- Bottom-nav items are 56h with 24×24 icons + 11px label. Spacing 0 (full-bleed across the bar).

---

## Typography reflow

The display scale is **clamp-based**, so headlines auto-shrink:
```css
--text-display-1: clamp(56px, 8vw, 112px);
--text-display-2: clamp(44px, 6vw, 80px);
```

The body scale is **fixed-step** — body text is 16px everywhere, no clamps. This is intentional: clamp on body text causes subtle CLS as the viewport changes, and body text doesn't need to scale dramatically.

Headings get `text-wrap: balance`. Paragraphs get `text-wrap: pretty`. (Both first-class in modern Chromium and Safari 18+.)

---

## Tested device floor

We design for and test on:
- iPhone SE (375×667) — the smallest viewport we care about
- iPhone 14 Pro (393×852) — modal default
- iPad Mini portrait (768×1024) — lg-1 boundary
- 13" MacBook Air (1440×900) — desktop default

Anything narrower than 375 is allowed to clip the sticky bottom bar; we don't engineer for <320px.
