# Vantage — Design System

> Elite game boosting, on demand.

**Vantage** is a premium game-boosting and coaching platform. Players hire vetted professional players ("boosters") to climb ranks, complete placements, run duos, level accounts, or take 1‑on‑1 coaching across competitive titles (League of Legends, Valorant, Apex, CS2, Rocket League, Overwatch, etc.).

The brand sits at the intersection of **luxury SaaS** (Linear, Stripe, Vercel, Raycast) and **modern esports** — premium dark UI, restrained motion, refined glassmorphism, and a single iridescent purple→blue→cyan gradient as the brand's only loud moment.

## Surfaces

Vantage ships three primary surfaces, all covered by this design system:

1. **Marketing site** — `vantage.gg` — hero, services, social proof, pricing, FAQ, footer.
2. **Service / Order Flow** — interactive configurator per service (rank boosting, coaching, etc.) with sticky order summary, ETA, and add-ons.
3. **Customer Dashboard** — logged-in app: active orders, live tracking, booster chat, wallet, match history, support, settings.

## Sources

There was **no existing codebase, Figma, or brand kit attached** when this system was bootstrapped. The brand identity, naming, palette, type system, components, and product UI were all originated in this project from a creative-direction brief. Anything you see here is the source of truth — there is nothing upstream to reconcile against.

If you connect a real codebase or Figma later, re-run the system bootstrap so it can reconcile against canonical product code instead of this designed-from-scratch baseline.

## Index

| File / Folder | What it is |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography. |
| `SKILL.md` | Agent-Skill manifest; lets this system be loaded as a Claude Skill. |
| `engineering/` | Production frontend handoff — Next 15 / TS / Tailwind v4 / shadcn / Framer architecture, component specs, motion + perf strategy, reference TSX. |
| `colors_and_type.css` | All design tokens — color, type, spacing, radius, shadow, motion — as CSS variables. Import this from any artifact. |
| `tokens.js` | Same tokens as a JS object for React components. |
| `fonts/` | Self-hosted webfonts (Geist, Geist Mono). |
| `assets/` | Logo lockups, mark, brand gradient, rank crests, placeholder imagery. |
| `preview/` | Small HTML cards rendered into the Design System tab (colors, type, spacing, components). |
| `ui_kits/marketing/` | Marketing site UI kit — homepage with hero, services, pricing, FAQ, footer. |
| `ui_kits/service/` | Service / order flow configurator. |
| `ui_kits/dashboard/` | Customer dashboard — sidebar, orders, live tracking, chat, wallet. |

---

## Content fundamentals

Vantage's voice is **confident, lean, and player-to-player**. It never sounds like a marketing department; it sounds like a top-500 player who happens to also run the company. We earn trust by being specific, not by being loud.

**Voice pillars**
- **Sharp.** Short sentences. Verbs do the work. "Climb faster." not "We help you climb faster."
- **Player-native.** We use the actual vocabulary — Diamond, Immortal, MMR, LP, placements, duo, smurf, off-role. We never explain terms a player would already know.
- **Calm authority.** No hype words ("INSANE!! 🔥"), no fake urgency ("Only 2 spots left!!"), no gamer caps lock. The product is the flex.
- **Specific over generic.** "Avg. boost completes in 3.2 days" beats "Fast delivery". Numbers, percentiles, win rates, ETAs — always.

**Tone & casing**
- Sentence case for everything: headings, buttons, nav, labels. Never Title Case. Never ALL CAPS except the wordmark and stat eyebrows (`LIVE`, `NEW`, rank tier labels).
- Person: **second-person ("you")** for marketing and onboarding. **First-person plural ("we")** sparingly for trust statements ("We refund any incomplete order, no questions."). Never "I".
- Numbers as numerals (4.9, not "four point nine"). Currency with the symbol, no space ($24).
- Em dashes — used freely — to add cadence. No semicolons.
- Oxford comma, always.

**Emoji & symbols**
- **No emoji** in product UI, marketing copy, or transactional messages. They cheapen the brand.
- Permitted glyphs: arrow `→`, en/em dash `– —`, multiplication `×`, bullet `·`, ratio `:`, percent `%`. Use a real `→`, not `->`.
- Rank tiers may use the official rank crest SVG (Iron through Challenger / Radiant / Predator). Never a generic trophy emoji.

**Examples — do / don't**

| Do | Don't |
|---|---|
| "Diamond in 6 days, or it's free." | "🚀 INSANE FAST BOOSTING 🔥🔥" |
| "Pick your current rank." | "Where are you now in your journey?" |
| "Booster assigned in 4 min on avg." | "Lightning-fast matching!" |
| "Live · 1,284 orders in progress" | "🟢 Tons of happy customers!" |
| "Refunds, always. No tickets." | "Industry-leading refund policy." |

**Headline patterns**
- Two- to five-word hero: "Climb without grinding." / "Your rank, faster." / "Pro players. Real wins."
- Subhead is the receipt: a number + a promise + a guarantee. "Boosters in the top 0.1%. Avg. 3.2-day delivery. Refund anytime."

**Microcopy**
- Buttons are verbs: "Start boost", "See live orders", "Match me with a booster", "Top up wallet". Never "Submit", "Click here", "Learn more".
- Empty states are confident, not apologetic: "No active orders. Start one →" not "You don't have any orders yet 😢".
- Errors are blameless and actionable: "Card declined — try another or use crypto." not "An error occurred."

---

## Visual foundations

The whole system rides on one rule: **let darkness do the work.** The page is near-black; surfaces are barely-lighter charcoal; one iridescent gradient carries the brand. Everything else is restraint.

### Color
- **Base.** A near-black page (`#07080A`) with three elevations of charcoal surface (`#0E1014`, `#15181E`, `#1C2028`). No pure `#000` — it kills depth on OLED.
- **Borders.** Almost invisible — `rgba(255,255,255,0.06)` hairlines. Borders are 1px and never colored except for focus.
- **Brand gradient.** A single conic/linear iridescence: **`#7C5CFF → #4FA8FF → #36E2D2`** (violet → azure → mint-cyan). It appears on **at most one element per viewport** — the primary CTA, a hero glow, or the wordmark on dark. Never on body text. Never on more than one card at a time.
- **Accents.** Solid versions of each gradient stop are available (`--accent-violet`, `--accent-azure`, `--accent-cyan`) for hover halos and data viz. Used sparingly.
- **Semantic.** Success `#36D399`, warning `#FFB547`, danger `#FF5C7C`. All chosen to read against dark surfaces without vibrating.
- **Text.** Three tiers — primary `#F5F6F8`, secondary `#9AA0AB`, muted `#5C6270`. Primary is never pure white; the slight off-white prevents harshness.

### Typography
- **One family: Geist** (display + UI) and **Geist Mono** (numerals in stats, tickers, code, order IDs). Geist's tight x-height and generous tracking at large sizes give the SaaS-meets-esports feel without screaming.
- **Display sizes are huge** — hero `clamp(56px, 8vw, 112px)`, tracked at `-0.04em`, line-height `0.95`. Body settles at 16/26 with `-0.005em`.
- **Numerals.** Tabular figures everywhere a number changes (price, ETA, win rate, live counter). `font-feature-settings: "tnum", "ss01"`.
- **Eyebrow labels.** 11px, `letter-spacing: 0.16em`, uppercase, secondary color — the only place uppercase is allowed.

### Spacing
- **4px base grid.** Tokens at 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 56 / 80 / 120 / 160. Components prefer the larger end of the scale — generous whitespace is the luxury signal.
- **Section padding.** Marketing sections breathe at `120px` desktop / `64px` mobile vertical.
- **Card padding.** `24–32px` for content cards, `16px` for dense data rows.

### Backgrounds
- **No photography in chrome.** No stock images, no rendered champion splash art in the UI. Game artwork only appears inside dedicated rank/title cards where it's masked into a circular crest or behind a heavy darken+blur veil.
- **Hero treatment.** A single radial gradient bloom — violet at 30% / azure at 60% / cyan at 90% — at ~40% opacity behind the headline, with a fine 1px noise overlay (`opacity: 0.04`) to kill banding.
- **No textures, no patterns, no grids.** A faint dot grid is permitted on dashboard empty states only.
- **Repeating motif.** Concentric arc segments (think rank meter) appear behind hero stats and as the loading spinner. They are the brand's only recurring graphic device.

### Motion
- **Easing.** A single curve for everything: `cubic-bezier(0.22, 1, 0.36, 1)` — fast out, soft settle. No bounces. No spring-overshoot.
- **Durations.** Micro 120ms (hover, color), small 220ms (press, toggles, accordion), medium 380ms (overlays, drawers, page reveals), large 600ms (hero entrance, route transitions).
- **Page reveals.** 8–12px translateY + opacity, staggered 40ms per row. Never scale-up.
- **Hover.** Color/border shift only. No vertical lift. Cards do not "pop up" — they get a faint 1px brighter border and a subtle inner highlight.
- **Press.** 0.98 scale, 80ms. Returns on `pointerup`.
- **Loading.** Skeleton shimmer is a single 1.6s linear sweep at 6% white. The brand spinner is concentric arcs rotating at different rates.
- **Floating.** The hero's "live order" cards drift ±4px on a 6s sine. That's the only ambient motion in the system.

### Hover & press states
- **Buttons primary.** Hover: gradient brightens (filter: brightness(1.08)) + subtle outer glow `0 0 32px rgba(124,92,255,0.35)`. Press: brightness(0.96) + `scale(0.98)`.
- **Buttons ghost.** Hover: surface fills `rgba(255,255,255,0.04)`. Press: `rgba(255,255,255,0.08)`.
- **Cards.** Hover: border lifts from `rgba(255,255,255,0.06)` → `rgba(255,255,255,0.12)`. Optional faint inner top highlight.
- **Links.** Underline animates in (left-to-right `transform: scaleX`).

### Borders, shadows, glows
- **Borders.** 1px hairline, `rgba(255,255,255,0.06)` resting / `0.12` hovered / `0.2` focused. Brand-gradient borders only on the active "selected" state of pricing/rank tiles, achieved with a 1px gradient ring (mask trick).
- **Outer shadows are minimal** in dark UI. The system uses **glows** instead: soft, large-radius color shadows at low opacity (`0 30px 80px -30px rgba(124,92,255,0.25)`) — these read as elevation without the muddy gray of traditional drop shadows.
- **Inner shadows.** A 1px top inset highlight `inset 0 1px 0 rgba(255,255,255,0.06)` on every elevated surface — this single line sells the glassmorphism without needing blur.
- **Focus.** 2px ring `rgba(124,92,255,0.5)` + 1px inner border in violet. Never the browser default.

### Glassmorphism
- Used **only** on persistent floating chrome: the marketing nav, the dashboard top bar, and modal backdrops. `backdrop-filter: blur(20px) saturate(140%)` over a 60%-opacity surface color. Never on cards in flow.

### Corner radii
- 4 / 8 / 12 / 16 / 24 / 999. The system biases to **12px for cards**, **8px for inputs/buttons**, **24px for hero containers**, and **999 for pills, avatars, tags**. No 4px on anything user-tappable — feels brittle.

### Cards
- Surface `#15181E`, 1px hairline border, `12px` radius, 1px inset top highlight, **no drop shadow at rest**, optional violet glow on selected.
- Padding `24px` standard.
- Title 16/600, body 14/450 secondary, value 28-40 in mono for stat cards.

### Layout rules
- **Container max-width:** 1200px for marketing, 1440px for dashboard.
- **Sticky elements:** marketing nav (top), service-page order summary (right rail desktop / bottom sheet mobile), dashboard sidebar (left).
- **Mobile-first** breakpoints: `480 / 768 / 1024 / 1280`. Mobile uses bottom-sheet patterns over modals; thumb zone for primary CTA; sticky bottom CTA on long marketing pages.

### Imagery treatment
- Cool-leaning, high-contrast, slight desaturation. If a photo must appear (rare), a violet→cyan duotone is applied at 80% with the original underneath.
- Game-rank crest SVGs are recolored to monochrome white-on-dark unless they are the focus of a card.
- No grain on photos; grain only on the hero gradient bloom.

### Transparency rules
- Borders, dividers, and inset highlights use `rgba(255,255,255, …)` — never solid grays. This keeps elevations consistent across surfaces.
- Backdrop blur (`>10px`) only on chrome that overlaps content, never on cards in normal flow.

---

## Iconography

See **ICONOGRAPHY** section below.

### System
Vantage uses **Lucide** (https://lucide.dev) as its icon library — a fork of Feather, with a 24×24 viewbox, 1.5px stroke, round caps and joins. It matches the brand's "minimal but powerful" tone: every icon is a single hairline stroke that pairs cleanly with our 1px UI borders.

> **Substitution flag.** No icon set was provided in the brief. Lucide was chosen as the closest match to the requested aesthetic (minimal, hairline, modern SaaS). If the real product uses a different set (Phosphor, Tabler, custom SVGs), swap `assets/icons/` and update this section.

### Usage
- **Default size:** 18px in dense UI, 20px in nav, 24px in marketing.
- **Default stroke:** 1.5px. Never override to 2px+ — it breaks the family.
- **Default color:** `currentColor`, set via the parent's text color. Tier hierarchy:
  - Primary action icons → `--text-primary`
  - Inline / decorative icons → `--text-secondary`
  - Disabled → `--text-muted`
- **Brand gradient on icons:** allowed only on the largest hero/feature icon per section, and only via SVG `<linearGradient>`.
- **Hit area:** icons inside buttons get a 40×40 minimum tap target.

### Loading
- CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`. For prototypes the inline `<i data-lucide="zap"></i>` pattern is fine.
- Production: tree-shake from `lucide-react` and import only what's used.

### Custom icons
The only **custom-drawn** marks in this system are:
- **The Vantage mark** (`assets/logo-mark.svg`) — a stacked chevron / ascending wedge.
- **The rank crests** (`assets/ranks/iron…challenger.svg`) — generic stand-ins; if the real product licenses Riot/Valve/EA marks, swap.
- **The conic loader** (`assets/loader.svg`) — concentric arcs, the brand motif.

### Emoji
None. Anywhere. See Content Fundamentals.

### Unicode
Permitted: `→` `←` `↑` `↓` `·` `×` `–` `—` `%` `★` (rank stars only). The arrow `→` is the system's tertiary CTA marker — every "Learn more" / "See all" gets one.
