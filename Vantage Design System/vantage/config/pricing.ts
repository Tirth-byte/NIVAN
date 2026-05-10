export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    blurb: "For climbing one division at a time.",
    price: { monthly: 19, annual: 15 },
    cta: "Start free",
    features: [
      "1 active order",
      "Standard booster pool (top 5%)",
      "VPN protection",
      "Live progress dashboard",
      "Email support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "For serious climbers and grinders.",
    price: { monthly: 49, annual: 39 },
    highlight: true,
    cta: "Start free",
    features: [
      "3 concurrent orders",
      "Elite booster pool (top 0.5%)",
      "Priority queue · 4-min match",
      "Live booster chat",
      "Off-role guarantee included",
      "24/7 chat support",
    ],
  },
  {
    id: "elite",
    name: "Elite",
    blurb: "For pros, streamers, and account managers.",
    price: { monthly: 129, annual: 99 },
    cta: "Talk to us",
    features: [
      "Unlimited orders",
      "Dedicated top-50 booster pool",
      "1-on-1 coaching · 4 hrs / month",
      "Stream-safe mode",
      "VOD reviews",
      "Account manager",
    ],
  },
] as const;

export const PRICING_MODIFIERS = {
  duo: 28,
  stream: 8,
  offrole: 12,
  priority: 15,
} as const;

/** Pure pricing math — shared client + server. */
export function calcOrderPrice(opts: {
  divisions: number;
  duo?: boolean;
  stream?: boolean;
  offrole?: boolean;
  priority?: boolean;
  promo?: number;
}) {
  const base = Math.max(1, opts.divisions) * 24;
  const extras =
    (opts.duo ? PRICING_MODIFIERS.duo : 0) +
    (opts.stream ? PRICING_MODIFIERS.stream : 0) +
    (opts.offrole ? PRICING_MODIFIERS.offrole : 0) +
    (opts.priority ? PRICING_MODIFIERS.priority : 0);
  return Math.max(0, base + extras - (opts.promo ?? 0));
}
