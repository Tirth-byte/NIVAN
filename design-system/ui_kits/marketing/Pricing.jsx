// Pricing — three tiers, middle is highlighted with brand-gradient ring

function Pricing() {
  const tiers = [
    {
      name: "Solo", price: "$24", per: "/ division",
      copy: "Pay-as-you-climb. Cancel any division.",
      features: ["Pro booster, top 1%", "VPN protection", "Live ETA", "Email support"],
      cta: "Start solo",
    },
    {
      name: "Duo", price: "$18", per: "/ win",
      copy: "Queue with a pro. You play, you climb.",
      features: ["Top 0.1% booster", "Stream-off mode", "Off-role guarantee", "Priority queue", "24/7 chat support"],
      cta: "Match me",
      featured: true,
    },
    {
      name: "Coach", price: "$39", per: "/ hour",
      copy: "Sessions w/ top-500 coaches. VOD review included.",
      features: ["Verified coach", "VOD breakdown", "Custom homework", "Replay library access"],
      cta: "Book session",
    },
  ];
  return (
    <Section padY={120} id="pricing" style={{ background: "var(--surface-1)" }}>
      <Container max={1100}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Eyebrow style={{ marginBottom: 12 }}>Pricing</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: "0 auto", maxWidth: 720 }}>
            Honest pricing.<br/><GradientText>Refund any time.</GradientText>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginTop: 20 }}>
            No annual contracts. No hidden fees. The price you see is the price you pay.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, alignItems: "stretch" }}>
          {tiers.map((t) => (
            <PricingCard key={t.name} {...t}/>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function PricingCard({ name, price, per, copy, features, cta, featured }) {
  return (
    <div style={{
      position: "relative",
      background: "var(--surface-2)",
      border: featured ? "1px solid transparent" : "1px solid var(--border)",
      borderRadius: 20,
      padding: 32,
      boxShadow: featured ? "var(--inset-top), 0 30px 80px -30px rgba(124,92,255,0.5)" : "var(--inset-top)",
      ...(featured ? {
        backgroundImage: "linear-gradient(var(--surface-2), var(--surface-2)), var(--grad-brand)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      } : {}),
      display: "flex", flexDirection: "column", gap: 24,
      transform: featured ? "translateY(-8px)" : "none",
    }}>
      {featured && (
        <Badge variant="violet" style={{ position: "absolute", top: -12, left: 28, background: "var(--surface-3)", borderColor: "rgba(124,92,255,0.4)" }}>
          Most popular
        </Badge>
      )}
      <div>
        <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 4px", letterSpacing: "-0.01em" }}>{name}</h3>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>{copy}</p>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontFeatureSettings: '"tnum"', fontSize: 48, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>
          {featured && <GradientText>{price}</GradientText>}
          {!featured && price}
        </span>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{per}</span>
      </div>
      <Button variant={featured ? "primary" : "secondary"} size="md" style={{ width: "100%", justifyContent: "center" }}>
        {cta}
      </Button>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
        {features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--text-secondary)" }}>
            <span style={{ color: "var(--accent-cyan)" }}><Icon name="check" size={14}/></span>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

window.Pricing = Pricing;
