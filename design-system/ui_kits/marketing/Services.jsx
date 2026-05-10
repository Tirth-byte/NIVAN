// Services grid — 6 service cards

function Services() {
  const services = [
    { icon: "trophy",  name: "Rank Boosting", copy: "Iron to Challenger. Pro climbs your account safely.", price: "$24", per: "/ division", tag: "Most ordered" },
    { icon: "headset", name: "Coaching",      copy: "1:1 sessions with top-500 coaches. VOD review included.", price: "$39", per: "/ hour" },
    { icon: "target",  name: "Placements",    copy: "Lock in your seasonal start. 9/10 wins guaranteed.", price: "$89", per: "/ 10 games" },
    { icon: "users",   name: "Duo Queue",     copy: "Stream off, queue with a pro. You play, you climb.", price: "$18", per: "/ win" },
    { icon: "chart",   name: "Account Leveling", copy: "Smurf-ready accounts. From 0 to ranked-eligible.", price: "$49", per: "/ account" },
    { icon: "crown",   name: "Custom Orders", copy: "Tell us what you need. Quote in under 2 minutes.", price: "Custom", per: "" },
  ];
  return (
    <Section padY={120} id="services">
      <Container max={1200}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <Eyebrow style={{ marginBottom: 12 }}>Services</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
              Everything you need<br/>to <GradientText>climb.</GradientText>
            </h2>
          </div>
          <Button variant="ghost">All services <span style={{ fontFamily: "var(--font-mono)" }}>→</span></Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {services.map((s) => (
            <ServiceCard key={s.name} {...s}/>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ServiceCard({ icon, name, copy, price, per, tag }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-2)",
        border: hover ? "1px solid var(--border-strong)" : "1px solid var(--border)",
        borderRadius: 16, padding: 28, position: "relative", overflow: "hidden",
        boxShadow: hover ? "var(--inset-top-strong), 0 20px 60px -30px rgba(124,92,255,0.45)" : "var(--inset-top)",
        transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
        cursor: "pointer",
      }}
    >
      {/* hover bloom */}
      <div style={{
        position: "absolute", top: -120, right: -120, width: 280, height: 280,
        background: "var(--grad-bloom)", filter: "blur(40px)",
        opacity: hover ? 0.5 : 0, transition: "opacity 380ms",
        pointerEvents: "none",
      }}/>
      <div style={{ position: "relative" }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: "var(--surface-3)", border: "1px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "var(--accent-cyan)", marginBottom: 24, boxShadow: "var(--inset-top)",
        }}>
          <Icon name={icon} size={20}/>
        </div>
        {tag && <Badge variant="violet" style={{ position: "absolute", right: 0, top: 8 }}>{tag}</Badge>}
        <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 8px" }}>{name}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-secondary)", margin: 0, minHeight: 44 }}>{copy}</p>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 28 }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontFeatureSettings: '"tnum"', fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }}>{price}</span>
            <span style={{ fontSize: 13, color: "var(--text-muted)", marginLeft: 6 }}>{per}</span>
          </div>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 14,
            color: hover ? "var(--accent-cyan)" : "var(--text-muted)",
            transform: hover ? "translateX(4px)" : "translateX(0)",
            transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
          }}>→</span>
        </div>
      </div>
    </div>
  );
}

window.Services = Services;
