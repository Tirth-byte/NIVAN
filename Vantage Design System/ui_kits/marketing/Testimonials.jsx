// Testimonials — review cards w/ avatars

function Testimonials() {
  const reviews = [
    { name: "Naomi A.", rank: "Diamond II", title: "League of Legends", initials: "NA", color: "linear-gradient(135deg, #7C5CFF, #4FA8FF)",
      quote: "Three divisions in four days. Zero ban risk, communication every match. I'll never grind again." },
    { name: "Marco V.",  rank: "Immortal 1", title: "Valorant", initials: "MV", color: "linear-gradient(135deg, #4FA8FF, #36E2D2)",
      quote: "Coaching session was worth more than the boost itself. Fixed my mid-round decision-making in one hour." },
    { name: "Priya K.",  rank: "Master",     title: "Apex Legends", initials: "PK", color: "linear-gradient(135deg, #36E2D2, #7C5CFF)",
      quote: "Sticky order summary, live ETA, refund button right there. This feels like Stripe for esports." },
  ];
  return (
    <Section padY={120}>
      <Container max={1200}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <Eyebrow style={{ marginBottom: 12 }}>Reviews</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0 }}>
              4.9 / 5 across<br/><GradientText>14,201 reviews.</GradientText>
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ display: "flex", gap: 4, justifyContent: "flex-end", color: "var(--accent-cyan)" }}>
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={18} stroke={0} style={{ fill: "currentColor" }}/>)}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 8 }}>Verified · Trustpilot · Discord</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {reviews.map((r) => (
            <div key={r.name} style={{
              background: "var(--surface-2)", border: "1px solid var(--border)",
              borderRadius: 16, padding: 28, boxShadow: "var(--inset-top)",
              display: "flex", flexDirection: "column", gap: 24, minHeight: 240,
            }}>
              <div style={{ display: "flex", gap: 4, color: "var(--accent-cyan)" }}>
                {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="star" size={14} stroke={0} style={{ fill: "currentColor" }}/>)}
              </div>
              <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--text-primary)", margin: 0, fontWeight: 400, letterSpacing: "-0.01em", flex: 1 }}>
                "{r.quote}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 999,
                  background: r.color, display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 13, color: "#07080A",
                }}>{r.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{r.title} · {r.rank}</div>
                </div>
                <Badge variant="ghost">VERIFIED</Badge>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

window.Testimonials = Testimonials;
