// Sticky right-rail order summary

function OrderSummary({ from, to, config, price, eta }) {
  const t1 = window.RANK_TIERS[from.tierIdx];
  const t2 = window.RANK_TIERS[to.tierIdx];
  const divs = (to.tierIdx - from.tierIdx) * 4 + (to.div - from.div);
  const lineItems = [
    { label: `${t1.name} ${["IV","III","II","I"][from.div]} → ${t2.name} ${["IV","III","II","I"][to.div]}`, value: `$${(divs * 24).toFixed(2)}` },
    config.mode === "duo" && { label: "Duo queue", value: "+$28.00" },
    config.addOns?.stream && { label: "Live stream", value: "+$8.00" },
    config.addOns?.offrole && { label: "Off-role guarantee", value: "+$12.00" },
    config.addOns?.priority && { label: "Priority queue", value: "+$15.00" },
    { label: "VPN protection", value: "Included", muted: true },
    { label: "Promo VANTAGE‑20", value: "−$24.00", color: "var(--success)" },
  ].filter(Boolean);

  return (
    <div style={{
      position: "sticky", top: 92,
      background: "var(--surface-2)", border: "1px solid var(--border)",
      borderRadius: 16, padding: 24,
      boxShadow: "var(--inset-top), 0 30px 80px -30px rgba(0,0,0,0.6)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <Eyebrow>Order summary</Eyebrow>
        <Badge variant="success"><LiveDot/>LIVE PRICE</Badge>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingBottom: 20, borderBottom: "1px solid var(--border)", marginBottom: 20 }}>
        {lineItems.map((li, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
            <span style={{ color: li.muted ? "var(--text-muted)" : "var(--text-secondary)" }}>{li.label}</span>
            <span style={{ fontFamily: "var(--font-mono)", color: li.color || "var(--text-primary)" }}>{li.value}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Total</span>
        <span style={{ fontFamily: "var(--font-mono)", fontFeatureSettings: '"tnum"', fontSize: 36, fontWeight: 600, letterSpacing: "-0.03em" }}>
          ${price.toFixed(2)}
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
        <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Estimated delivery</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-primary)" }}>{eta}</span>
      </div>

      <Button variant="primary" size="lg" style={{ width: "100%", justifyContent: "center" }}
        iconRight={<span style={{ fontFamily: "var(--font-mono)" }}>→</span>}>
        Start boost
      </Button>
      <Button variant="ghost" size="md" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
        Save & match later
      </Button>

      <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <TrustBadge icon="shield" label="Ban-protected" sub="Or full refund"/>
        <TrustBadge icon="refund" label="Refund anytime" sub="One-click, no tickets"/>
        <TrustBadge icon="clock"  label="Avg 3.2-day ETA" sub="Live in your dashboard"/>
        <TrustBadge icon="lock"   label="Encrypted" sub="Stripe + crypto"/>
      </div>
    </div>
  );
}

function TrustBadge({ icon, label, sub }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
      <span style={{ color: "var(--accent-cyan)", marginTop: 2 }}><Icon name={icon} size={14}/></span>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 1 }}>{sub}</div>
      </div>
    </div>
  );
}

window.OrderSummary = OrderSummary;
