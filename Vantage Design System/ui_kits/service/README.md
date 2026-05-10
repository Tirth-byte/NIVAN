# Vantage — Service / Order Flow UI Kit

The premium order-flow page for **Rank Boosting** as a click-thru prototype.

## Files
- `index.html` — entry; mounts the order page.
- `OrderPage.jsx` — page composition: hero band, configurator, sticky summary, trust strip, FAQ.
- `RankSelector.jsx` — current → desired rank selector with crests + division stepper.
- `Configurator.jsx` — game/queue/region selects, add-on toggles, duo toggle.
- `OrderSummary.jsx` — sticky right-rail summary with live price, ETA, badges, CTA.

Reuses primitives from `../marketing/components.jsx` (loaded via relative path).
