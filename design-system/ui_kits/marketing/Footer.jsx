// Footer — luxury SaaS multi-column

function Footer() {
  const cols = [
    { title: "Product",  links: ["Services", "Coaching", "Pricing", "Live orders", "API"] },
    { title: "Players",  links: ["Sign in", "Trustpilot", "Discord", "Refer & earn", "Wallet"] },
    { title: "Boosters", links: ["Apply", "Booster portal", "Payouts", "Conduct", "Tournaments"] },
    { title: "Company",  links: ["About", "Press", "Careers", "Contact", "Brand kit"] },
  ];
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--surface-1)",
      paddingTop: 80, paddingBottom: 32,
    }}>
      <Container max={1200}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <LogoMark size={32}/>
              <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.02em" }}>vantage</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--text-secondary)", maxWidth: 280, lineHeight: 1.6 }}>
              Elite game boosting and coaching, on demand. Operating in 92 countries since 2019.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {["twitter", "discord", "twitch", "youtube"].map((s) => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "var(--surface-2)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--text-secondary)", transition: "all 120ms",
                }}>
                  <Icon name={s} size={16}/>
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h6 style={{
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--text-secondary)", margin: "0 0 18px", fontWeight: 500,
              }}>{c.title}</h6>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.links.map((l) => (
                  <a key={l} href="#" style={{ fontSize: 14, color: "var(--text-primary)" }}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 28, borderTop: "1px solid var(--border)",
          fontSize: 12, color: "var(--text-muted)",
        }}>
          <div style={{ display: "flex", gap: 24 }}>
            <span>© 2026 Vantage Labs, Inc.</span>
            <a href="#" style={{ color: "var(--text-muted)" }}>Terms</a>
            <a href="#" style={{ color: "var(--text-muted)" }}>Privacy</a>
            <a href="#" style={{ color: "var(--text-muted)" }}>Refund policy</a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon name="shield" size={14}/> SOC 2 Type II
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Icon name="lock" size={14}/> PCI-DSS
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--success)" }}>
              <LiveDot color="var(--success)"/> All systems operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

window.Footer = Footer;
