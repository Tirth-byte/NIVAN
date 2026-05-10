# Vantage — Marketing UI Kit

The full **vantage.gg** homepage as a click-thru prototype.

## Files
- `index.html` — entry; mounts the homepage. Open this.
- `components.jsx` — shared primitives: `Button`, `Eyebrow`, `Badge`, `Card`, `LiveDot`, `GradientText`, `RankCrest`, `ArcPattern`, `LogoMark`, `Icon`.
- `Nav.jsx` — sticky glass navigation.
- `Hero.jsx` — headline, dual CTA, floating live-order cards over a gradient bloom.
- `SocialProof.jsx` — stat strip (active users, orders completed, win rate, avg ETA).
- `Services.jsx` — 6-card services grid (Rank Boosting, Coaching, Placements, Duo, Leveling, Custom).
- `WhyChooseUs.jsx` — feature cards (boosters, VPN, fast delivery, secure payments, 24/7, win rate).
- `LiveActivity.jsx` — dashboard-style live order ticker.
- `Testimonials.jsx` — review cards w/ avatars + rank badges.
- `Pricing.jsx` — three tiers, middle one selected with brand-gradient ring.
- `Faq.jsx` — minimal accordion.
- `Footer.jsx` — multi-column luxury SaaS footer.

## How it works
Plain HTML + React 18 via UMD + Babel-standalone (per project standard). All components export to `window` so they can be composed across files. Uses tokens from `../../colors_and_type.css`.
