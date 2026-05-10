// Why choose us — feature cards

function WhyChooseUs() {
  const features = [
    { icon: "users",   title: "Vetted pro boosters", copy: "Every booster is top 0.1% of the ladder, hand-screened, and reviewed weekly." },
    { icon: "shield",  title: "VPN protection",     copy: "Our boosters connect from your region. Riot/Valve never sees an anomaly." },
    { icon: "zap",     title: "Lightning delivery", copy: "Avg. 3.2-day completion. Live ETA in your dashboard, every match." },
    { icon: "lock",    title: "Encrypted payments", copy: "Stripe + crypto. We don't store cards, and never your account password." },
    { icon: "headset", title: "24/7 human support", copy: "Real ex-boosters answer in under 4 min. No bots, no escalation tree." },
    { icon: "chart",   title: "73% win rate",       copy: "We publish our weekly numbers. Live, public, and refreshed every match." },
  ];
  return (
    <Section padY={120} id="why" style={{ background: "var(--surface-1)" }}>
      <Container max={1200}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Eyebrow style={{ marginBottom: 12 }}>Why Vantage</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: "0 auto", maxWidth: 720 }}>
            Six reasons we're the<br/><GradientText>last platform you'll use.</GradientText>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
          {features.map((f) => (
            <div key={f.title} style={{
              background: "var(--surface-2)", padding: 32, minHeight: 220,
              display: "flex", flexDirection: "column", gap: 18,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "var(--surface-3)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent-azure)",
              }}>
                <Icon name={f.icon} size={20}/>
              </div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{f.title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0 }}>{f.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.WhyChooseUs = WhyChooseUs;
