# 06 · Visual Refinement

The concept HTML in `ui_kits/` proves the direction. This phase tightens the screws so production lands at "expensive" not "promising".

## Spacing rhythm

Section vertical padding follows a deliberate scale, **not** equal everywhere:

| Section | Mobile | Desktop |
|---|---|---|
| Hero | `pt-24 pb-16` | `pt-40 pb-32` |
| First content section | `py-16` | `py-24` |
| Subsequent sections | `py-12` | `py-20` |
| Pricing (anchor section) | `py-16` | `py-32` |
| FAQ | `py-12` | `py-20` |
| Footer top padding | `pt-20` | `pt-32` |

Pricing gets the most breathing room because it's the conversion section — let it dominate the scroll.

**Card internal spacing** is uniform: `p-5 md:p-6` (20 → 24). Don't vary by tier.

**Stack spacing** between elements in a card uses `gap-3` (12) for label/value pairs, `gap-4` (16) for paragraphs, `gap-6` (24) for distinct subsections. Never `gap-5` — it's the dead zone between rhythms.

---

## Glow intensity — turn it down

The concept kit dials glow up to demonstrate the system. Production glow is **40% the intensity**.

| Element | Glow |
|---|---|
| Hero bloom | `--grad-bloom` at 40% opacity, single 60% radial |
| Primary CTA | `0 0 24px rgba(124,92,255,0.22)` — was 35%, drop to 22% |
| Highlighted pricing card | 1px violet border + `0 0 32px rgba(124,92,255,0.18)` halo |
| Live dot | 6px pulsing dot + `0 0 8px` color shadow — no further glow |
| Selected rank crest | `0 0 16px <color>30` — single ring, no double-pulse |

Rule: **at most one glowing element per viewport**. If the hero bloom is on screen, the CTA glow is suppressed (compete = both lose).

---

## Border hierarchy

Three border opacities, used precisely:

| Token | Use |
|---|---|
| `border-faint` (white 4%) | Dividers between rows in a list |
| `border` (white 6%) | All cards, all panels, all inputs at rest |
| `border-strong` (white 12%) | Hover state on cards, selected state on options, sidebar active |

**Never** use a colored border at rest. Color only enters the border on:
- focus (violet 50%)
- selected (violet 50% or accent color at 30%)
- error (danger 40%)

This keeps the UI calm by default and makes interactive feedback unmissable.

---

## Card depth

The dark-UI illusion of depth is built from three layers stacked on every card:

1. **Surface fill** — flat color (`surface-2`, no gradient).
2. **1px border** — `border` token (white 6%).
3. **Inset top highlight** — `inset 0 1px 0 rgba(255,255,255,0.06)` — this is the entire reason the card looks raised. Never skip it.

For featured cards (pricing highlight, hero showcase), add a 4th layer: a 1px **brand-gradient outer border** drawn via `before:absolute inset-[-1px] rounded-[inherit] bg-gradient-to-br from-violet/40 via-azure/30 to-cyan/40 -z-10` and a soft halo. Keep all four layers rendering — don't replace, stack.

---

## Shadow consistency

Three shadow tokens. That's it.

- `shadow-1` — buttons, inputs at rest. 1px subtle.
- `shadow-pop` — popovers, modals, dropdowns. Asymmetric (24px vertical, 60px blur, 0 spread).
- `shadow-glow-cta` — primary CTA only. Color-tinted.

Cards get **no drop shadow** — the inset highlight does the work. Drop shadow on dark UI looks muddy.

---

## Hover & press refinement

Hover states are **brightness shifts**, not color shifts:
- Solid fills: `filter: brightness(1.08)`
- Surfaces: border lifts to `border-strong`, no fill change
- Text links: color shifts to `accent-azure` over 120ms
- Icon buttons: opacity 0.7 → 1.0

Press states are **scale shifts**, not color shifts:
- Buttons: `scale(0.98)` over 80ms (feels physical)
- Cards: no press state (they aren't buttons)
- Toggles: no scale; the state itself is the feedback

**No tilt, no glow-on-hover, no shimmer-sweep.** Those read as gamer, not premium.

---

## Typography balance

- Hero headline: `text-display-1` (clamp 56→112), `font-bold`, `tracking-display`, `leading-tight`. Always 1–2 lines max — `text-balance`.
- Section headlines: `text-display-3` (clamp 36→56), `font-semibold`. Always 1 line at desktop.
- Body copy: 16/26 (size/leading). `text-secondary` color — never primary on body. Reserves `text-primary` for headlines and stat numbers, which makes them pop without resorting to color.
- Eyebrows: 11/16, `tracking-eyebrow` (0.16em), uppercase, `text-secondary`. Used above every section to set context in 2-3 words. Color the eyebrow with `text-accent-cyan` for "live" sections (live order feed, real-time UI) — only place we color them.
- Numbers in stat cards: `font-mono`, `tabular-nums`, `font-semibold`, `tracking-[-0.03em]`. Never animate via DOM swap — use `<NumberRoll>` to morph digits.

The ratio between the largest type (display-1) and smallest (micro) is **10x** (112 → 11). Avoid sizes between 18 and 28 except for h4 — the gap is intentional and creates clear hierarchy.

---

## Motion timing — the four numbers

| Token | Use |
|---|---|
| `120ms` | Hover, focus, micro |
| `220ms` | Toast, segmented tab swap, small reveals |
| `380ms` | Modal, accordion, page-section reveal |
| `600ms` | Progress bar fill, big enter sequences |

Pick from these four. Don't invent durations. The single curve everywhere: `cubic-bezier(0.22, 1, 0.36, 1)`.

---

## What still feels off, and what to fix in production

1. **Concept kit's gradient text is too saturated.** Production: drop the gradient text-clip to a single tint (`text-violet-300`) for body-adjacent text; keep the full gradient for the hero word only.
2. **Crest placeholders need real game art.** Lock in licensing for League / Valorant / Apex tier crests before launch.
3. **Photography**: no stock. Either commission booster portraits or use anonymized initials in colored circles (the system already supports this).
4. **Dark mode is the default and the only mode** for v1. Light mode adds 30% to the design budget for ~5% of users. Defer.
