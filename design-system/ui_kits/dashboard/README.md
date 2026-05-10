# Vantage — Customer Dashboard UI Kit

The logged-in dashboard at **app.vantage.gg** as a click-thru prototype.

## Files
- `index.html` — entry; mounts the dashboard with a section switcher (Overview / Orders / Wallet / Support / Settings).
- `Sidebar.jsx` — fixed left nav with brand, sections, user card.
- `TopBar.jsx` — search, notifications, wallet balance.
- `Overview.jsx` — active orders, live progress, booster chat preview, stat cards.
- `OrderDetail.jsx` — single live order with progress, match feed, booster chat.
- `Wallet.jsx` — balance, top-up, transactions.

Reuses primitives from `../marketing/components.jsx`.
