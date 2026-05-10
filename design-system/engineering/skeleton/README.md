# skeleton/

Representative TSX files referenced from the engineering docs. These are **examples, not a runnable Next.js app** — paths use `@/lib/cn` etc. as if mounted in a real project.

| File | Lives at (in real app) | Notes |
|---|---|---|
| `Button.tsx` | `components/ui/Button.tsx` | cva variants, asChild, loading state |
| `Card.tsx` | `components/ui/Card.tsx` | Surface + tone + elevation; RSC |
| `Reveal.tsx` | `components/motion/Reveal.tsx` | Viewport-triggered fade-up |
| `AppSidebar.tsx` | `components/nav/AppSidebar.tsx` | Server shell |
| `NavItem.tsx` | `components/nav/NavItem.tsx` | Client island (usePathname) |
| `cn.ts` | `lib/cn.ts` | clsx + twMerge helper |
| `motion.ts` | `lib/motion.ts` | Shared variants & timing |

Use these as reference implementations when scaffolding the real `vantage/` app.
