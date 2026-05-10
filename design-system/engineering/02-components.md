# 02 · Component System

shadcn/ui is the floor; we extend it. Every component lives in `components/ui/` (primitives) or `components/<domain>/` (composed). All components are typed with discriminated-union variants, never boolean prop soup.

## Authoring rules

1. **Variants via `cva`** (`class-variance-authority`). Never branch on props inside JSX for styling.
2. **`asChild` pattern** (Radix Slot) for composition — `<Button asChild><Link href="/x">Go</Link></Button>` instead of a `href` prop.
3. **Forward refs** on every primitive. Required for tooltips, popovers, focus management.
4. **No `style={{}}`** in components. Use Tailwind classes; if a value is dynamic, expose a CSS var.
5. **Keep prop surfaces under 6**. If you need more, split the component.
6. **Accessibility is non-optional**: every interactive primitive routes through Radix.

---

## Primitives (`components/ui/`)

### Button
```tsx
<Button variant="primary" size="lg" iconRight={<ArrowRight/>}>Start boost</Button>
```
Variants: `primary` (gradient), `secondary` (subtle surface), `ghost` (text-only), `outline`, `danger`.
Sizes: `sm` (32h), `md` (40h), `lg` (48h), `icon` (40×40).
States: hover (filter brightness +8%), active (scale 0.98), disabled (40% opacity, no events), loading (spinner replaces icon).

See `skeleton/Button.tsx`.

### Card
```tsx
<Card elevation="1" interactive>…</Card>
```
Variants: `elevation` 0–3 (border opacity ladder), `tone` `default | violet | cyan | success | danger`.
Always: `bg-surface-2 border border-border rounded-md shadow-inset-top`.
Interactive cards add: cursor pointer, 1px border lift to `border-strong` on hover, no transform.

### Pricing card
```tsx
<PricingCard
  tier="Pro"
  price={{ monthly: 19, annual: 15 }}
  highlight
  features={[…]}
  cta={{ label: "Start free", href: "/signup" }}
/>
```
The `highlight` variant adds the brand-gradient halo (1px outer + soft glow) — never more than one per pricing row.

### Service card
Used in services grid. Three slots: icon, title, body, optional `meta` (avg ETA, price-from). Hover lifts border to `border-strong` and warms the icon glow by 30%. No translateY.

### Dashboard widgets
- `<StatCard label value delta tone>` — KPI tiles.
- `<ProgressBar value max segmented?>` — gradient fill, optional 4-segment ticker for "12 of 19 wins".
- `<LiveDot>` — 6px circle, pulses 1.4s ease-in-out, color-tinted.
- `<RankCrest tier division size>` — shared between marketing and dashboard.
- `<OrderRow>` — list-item flavor of the order card (compact).

### Sidebar (`AppSidebar`)
Fixed 248px. Sections: brand, primary nav, account card. Active state = surface-3 fill + inset highlight + token color. **Server component**; only `<NavItem>` is client (uses `usePathname`).

### Navbar (`MarketingNav`)
Sticky, blur backdrop after 12px scroll. Links: server-rendered. Mobile drawer: lazy-loaded client island via `next/dynamic`.

### Mobile navigation (`MobileNav`)
Bottom-anchored on `<md`, slides up via `vaul` (drawer primitive — bundled with shadcn). Five items max + center "+" CTA. Thumb-zone safe (bottom 88px).

### Accordion (`<Accordion type="single" collapsible>`)
Radix accordion. **Use `<details>` instead** when there's no need for animated open — saves the bundle. FAQ uses Radix because we animate the disclosure with `framer-motion`'s `AnimatePresence`.

### Modal / Dialog
Radix `Dialog`. Always: backdrop `bg-bg/80 backdrop-blur-md`, panel `surface-2 + shadow-pop + radius-xl`. Open: 220ms ease-out fade + 4px translateY. Close: 160ms.

### Inputs
- `<Input>` — 40h, surface-2, focus ring violet/50 + violet/12 outer.
- `<Textarea>` — same skin, min 96h.
- `<NumberInput>` — pairs with stepper buttons; uses `tabular-nums`.
- `<SearchInput>` — left icon slot, optional `cmd-k` chip on right.

### Select / Combobox
Radix `Select` for ≤8 options (game, region). `cmdk` Combobox for >8 (booster picker, champion select). Both use `surface-3` panel with `shadow-pop`.

### Tabs
Radix `Tabs`. Two flavors:
- **Segmented** (small, in cards): pill background that slides under active tab via `layoutId="tab-pill"`.
- **Underline** (page-level): 1px brand-gradient underline, 200ms slide between.

### Toast (`sonner`)
Position bottom-right desktop, top-center mobile. Variants: `success` (cyan icon), `error` (danger icon), `info`, `loading` (spinner). Auto-dismiss 5s, action toasts persist until clicked.

### Tooltip
Radix `Tooltip` with `Provider delayDuration={350}`. `surface-3` background, `border` outline, 12/13 caption text. **Never** put critical info in a tooltip — they don't exist on touch.

### Skeleton
Single primitive: `<Skeleton className="h-4 w-32 rounded-sm" />`.
Animation: `bg-gradient-to-r from-surface-2 via-surface-3 to-surface-2 bg-[length:200%_100%] animate-shimmer`.
Shimmer keyframe: 1.4s ease-in-out infinite.
Compose into `<OrderRowSkeleton/>`, `<StatCardSkeleton/>` per surface — never make consumers compose primitives by hand.

### Live status indicator (`<LiveDot>` + `<StatusBadge>`)
Three states map to three colors: `live` (cyan, pulsing), `queued` (amber, static), `done` (success, static), `failed` (danger, static). Always paired with a label — never just a dot.

---

## Variants & sizing — global rules

**Spacing**: every component padding comes from a 4px-grid token (`p-2 p-3 p-4 p-6`). No `p-[14px]`.

**Radii**: components map to one radius:
- Inputs / buttons: `rounded-sm` (8px)
- Cards / panels: `rounded-md` (12px)
- Hero containers / featured tiles: `rounded-xl` (24px)
- Pills / badges: `rounded-pill`

**Shadows**: dark-UI rule — drop shadows are minimal, the inset highlight does the heavy lifting.
- Default elevated: `shadow-inset-top` (1px white-6% on top edge)
- Floating panels: `shadow-pop` (24px 60px blur, dark)
- CTA buttons: `shadow-glow-cta` (color-tinted, only on `variant="primary"`)

**Hover/press**:
- Hover: 120ms `--ease`, `filter: brightness(1.08)` for solid fills, border-lift for surfaces.
- Press: 80ms `transform: scale(0.98)`. No press state on rows or links.
- Focus: always `--focus-ring` (violet 50% + 4px halo). Never remove the outline.

**Disabled**: opacity 40%, `pointer-events: none`. Never grey out text alone — the whole component dims uniformly.

---

## Naming

| Layer | Example | Notes |
|---|---|---|
| Primitive | `<Button>` | Generic, no domain |
| Composed | `<PricingCard>` | Domain-specific tile |
| Feature | `<OrderConfigurator>` | Owns state + composition |
| Page | `app/(marketing)/page.tsx` | Composes features only |

Files: `PascalCase.tsx`. One component per file unless siblings are <30 LOC each (e.g. `Card.tsx` exports `Card`, `CardHeader`, `CardBody`, `CardFooter`).
