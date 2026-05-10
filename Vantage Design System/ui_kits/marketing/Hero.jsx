// Hero — massive headline + dual CTA + floating live-order cards

function Hero() {
  return (
    <GradientBloom height={780}>
      <div style={{ position: "absolute", right: -80, top: 60, opacity: 0.5, pointerEvents: "none" }}>
        <ArcPattern size={620}/>
      </div>
      <Container max={1200}>
        <div style={{ paddingTop: 96, display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <Eyebrow color="var(--accent-cyan)" style={{ marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
              <LiveDot color="var(--accent-cyan)"/> Season 14 · live boosts in 12 titles
            </Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "clamp(56px, 8vw, 104px)", lineHeight: 0.95,
              letterSpacing: "-0.04em", margin: 0,
            }}>
              Climb without<br/><GradientText>grinding.</GradientText>
            </h1>
            <p style={{
              marginTop: 28, fontSize: 19, lineHeight: 1.6,
              color: "var(--text-secondary)", maxWidth: 520,
            }}>
              Boosters in the top 0.1%. Avg. <span style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>3.2-day</span> delivery. Refund anytime — even mid-order. No tickets, no waiting.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 12, alignItems: "center" }}>
              <Button variant="primary" size="lg" iconRight={<span style={{ fontFamily: "var(--font-mono)" }}>→</span>}>Start boost</Button>
              <Button variant="ghost" size="lg">Watch live orders</Button>
            </div>
            <div style={{ marginTop: 40, display: "flex", gap: 28, color: "var(--text-muted)", fontSize: 13, alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="shield" size={16}/> VPN protection</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="lock" size={16}/> Encrypted creds</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Icon name="refund" size={16}/> Refund anytime</div>
            </div>
          </div>
          <HeroVisual/>
        </div>
      </Container>
    </GradientBloom>
  );
}

function HeroVisual() {
  return (
    <div style={{ position: "relative", height: 520 }}>
      {/* Big anchor card — booster matched */}
      <div style={{
        position: "absolute", right: 0, top: 30, width: 400,
        background: "rgba(21,24,30,0.72)",
        backdropFilter: "blur(20px)",
        border: "1px solid var(--border-strong)", borderRadius: 16,
        padding: 24, boxShadow: "var(--inset-top), 0 30px 80px -20px rgba(0,0,0,0.7), var(--glow-violet)",
        animation: "vtgFloat 6s ease-in-out infinite",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <Eyebrow>Order in progress</Eyebrow>
          <Badge variant="success"><LiveDot/>LIVE</Badge>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <RankCrest tier="D2" color="var(--accent-cyan)" size={48}/>
          <div>
            <div style={{ color: "var(--text-secondary)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>Diamond II → Master</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 2 }}>League of Legends</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }}>
          <span>Progress</span><span className="mono" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>62%</span>
        </div>
        <div style={{ height: 6, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden", marginBottom: 18 }}>
          <div style={{ width: "62%", height: "100%", background: "var(--grad-brand)", borderRadius: 999 }}/>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          <Stat label="Win rate" value="73%" delta="+4.2"/>
          <Stat label="Avg LP" value="+18" delta="+2"/>
          <Stat label="ETA" value="02:11"/>
        </div>
      </div>

      {/* Booster identity card */}
      <div style={{
        position: "absolute", left: 0, top: 0, width: 260,
        background: "rgba(28,32,40,0.7)",
        backdropFilter: "blur(20px)",
        border: "1px solid var(--border-strong)", borderRadius: 14,
        padding: 16, boxShadow: "var(--inset-top), 0 20px 50px -20px rgba(0,0,0,0.6)",
        animation: "vtgFloat 7s ease-in-out infinite reverse",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 999,
            background: "linear-gradient(135deg, #4FA8FF, #36E2D2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#07080A",
          }}>KZ</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>@kazuya</div>
            <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>Top 0.04% · 412 boosts</div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
          <Badge variant="violet">Pro</Badge>
          <Badge variant="cyan">Mid</Badge>
        </div>
      </div>

      {/* New order toast */}
      <div style={{
        position: "absolute", left: 60, bottom: 30, width: 280,
        background: "rgba(28,32,40,0.7)",
        backdropFilter: "blur(20px)",
        border: "1px solid var(--border-strong)", borderRadius: 14,
        padding: 14, boxShadow: "var(--inset-top), 0 20px 50px -20px rgba(0,0,0,0.6)",
        animation: "vtgFloat 8s ease-in-out infinite",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent-cyan)", boxShadow: "0 0 12px var(--accent-cyan)" }}/>
          <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>New order · <span style={{ color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>VTG‑8K3‑42091</span></div>
        </div>
        <div style={{ fontSize: 14, marginTop: 8, color: "var(--text-primary)" }}>Plat III → Diamond IV · $184.20</div>
      </div>
    </div>
  );
}

function Stat({ label, value, delta }) {
  return (
    <div>
      <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginTop: 4 }}>{value}</div>
      {delta && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--success)", marginTop: 2 }}>↑ {delta}</div>}
    </div>
  );
}

window.Hero = Hero;
