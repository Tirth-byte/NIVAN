// Live activity — dashboard-style ticker of in-progress orders

function LiveActivity() {
  const orders = [
    { id: "VTG‑8K3‑42091", from: "D2", to: "Master", title: "League of Legends", booster: "kazuya", pct: 62, eta: "02:11", win: "73%" },
    { id: "VTG‑8K3‑42088", from: "P3", to: "D4",     title: "League of Legends", booster: "ren",    pct: 8,  eta: "—",     win: "—" },
    { id: "VTG‑8K3‑42072", from: "G1", to: "P4",     title: "Valorant",          booster: "miko",   pct: 41, eta: "08:32", win: "67%" },
    { id: "VTG‑8K3‑42061", from: "B2", to: "Diamond", title: "Apex Legends",     booster: "vex",    pct: 88, eta: "00:42", win: "81%" },
  ];
  return (
    <Section padY={120}>
      <Container max={1200}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "center" }}>
          <div>
            <Eyebrow color="var(--accent-cyan)" style={{ marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <LiveDot color="var(--accent-cyan)"/> Real-time
            </Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 20px" }}>
              See your order<br/><GradientText>climb live.</GradientText>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-secondary)", maxWidth: 440, margin: "0 0 28px" }}>
              Every match, every LP gain, every win — pushed to your dashboard the moment your booster queues up. No refreshing. No waiting.
            </p>
            <Button variant="ghost" iconRight={<span style={{ fontFamily: "var(--font-mono)" }}>→</span>}>See the dashboard</Button>
          </div>
          <div style={{
            background: "var(--surface-2)", border: "1px solid var(--border)",
            borderRadius: 16, overflow: "hidden", boxShadow: "var(--inset-top), 0 30px 80px -30px rgba(0,0,0,0.6)",
          }}>
            <div style={{ padding: "18px 22px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <LiveDot color="var(--accent-cyan)"/>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>Live order feed</span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>1,284 in progress</span>
            </div>
            {orders.map((o, i) => (
              <div key={o.id} style={{
                padding: "16px 22px", display: "flex", alignItems: "center", gap: 16,
                borderBottom: i < orders.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <RankCrest tier={o.from} color="var(--text-secondary)" size={36}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, display: "flex", gap: 8, alignItems: "center" }}>
                    {o.from} → {o.to}
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", fontWeight: 400 }}>{o.id}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 3 }}>
                    {o.title} · @<span style={{ color: "var(--accent-cyan)" }}>{o.booster}</span> · win {o.win}
                  </div>
                </div>
                <div style={{ width: 140 }}>
                  <div style={{ height: 4, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${o.pct}%`, background: "var(--grad-brand)", borderRadius: 999 }}/>
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-primary)", width: 60, textAlign: "right" }}>{o.eta}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

window.LiveActivity = LiveActivity;
