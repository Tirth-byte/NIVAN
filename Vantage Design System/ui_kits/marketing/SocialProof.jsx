// Social proof — stat strip + trust logos

function SocialProof() {
  const stats = [
    { label: "Active players", value: "184,290" },
    { label: "Orders completed", value: "2.41M" },
    { label: "Avg. delivery", value: "3.2 d" },
    { label: "Booster win rate", value: "73%" },
    { label: "Trustpilot", value: "4.9 / 5" },
  ];
  return (
    <Section padY={80}>
      <Container max={1200}>
        <Eyebrow style={{ textAlign: "center", marginBottom: 32 }}>Trusted by players in 92 countries</Eyebrow>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0,
          background: "var(--surface-1)", border: "1px solid var(--border)",
          borderRadius: 16, overflow: "hidden", boxShadow: "var(--inset-top)",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "28px 24px", textAlign: "center",
              borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontFeatureSettings: '"tnum"',
                fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--text-primary)",
              }}>{s.value}</div>
              <div style={{
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--text-muted)", marginTop: 8, fontWeight: 500,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
window.SocialProof = SocialProof;
