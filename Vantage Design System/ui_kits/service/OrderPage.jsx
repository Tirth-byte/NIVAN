// Service / order flow page composition

function OrderPage() {
  const [from, setFrom] = React.useState({ tierIdx: 4, div: 1 }); // Plat III
  const [to,   setTo]   = React.useState({ tierIdx: 6, div: 0 }); // Diamond IV
  const [config, setConfig] = React.useState({
    game: "League of Legends", queue: "Solo/Duo", region: "EUW",
    mode: "solo", addOns: { offrole: true },
  });

  // Live price calc
  const divs = Math.max(1, (to.tierIdx - from.tierIdx) * 4 + (to.div - from.div));
  const base = divs * 24;
  const addExtra =
    (config.mode === "duo" ? 28 : 0) +
    (config.addOns?.stream ? 8 : 0) +
    (config.addOns?.offrole ? 12 : 0) +
    (config.addOns?.priority ? 15 : 0);
  const promo = -24;
  const price = Math.max(0, base + addExtra + promo);
  const eta = `~ ${(divs * 0.6).toFixed(1)} days`;

  return (
    <div data-screen-label="Service — rank boost order">
      <Nav/>
      <GradientBloom height={260}>
        <Container max={1200}>
          <div style={{ paddingTop: 60 }}>
            <Eyebrow color="var(--accent-cyan)" style={{ marginBottom: 14 }}>Rank boosting · League of Legends</Eyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 700,
              letterSpacing: "-0.04em", lineHeight: 1, margin: 0, maxWidth: 700,
            }}>
              Configure your <GradientText>climb.</GradientText>
            </h1>
            <p style={{ marginTop: 18, color: "var(--text-secondary)", fontSize: 16, maxWidth: 560 }}>
              Pick your current and desired rank. We'll match you with a pro within 4 minutes.
            </p>
          </div>
        </Container>
      </GradientBloom>

      <Container max={1200} style={{ paddingBottom: 120 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32, alignItems: "start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <RankSelector from={from} setFrom={setFrom} to={to} setTo={setTo}/>
            <Configurator config={config} setConfig={setConfig}/>
            <BoosterMatched/>
          </div>
          <OrderSummary from={from} to={to} config={config} price={price} eta={eta}/>
        </div>
      </Container>

      <Faq/>
      <Footer/>
    </div>
  );
}

function BoosterMatched() {
  return (
    <div style={{
      background: "var(--surface-2)", border: "1px solid var(--border)",
      borderRadius: 16, padding: 24, boxShadow: "var(--inset-top)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <Eyebrow>Suggested booster</Eyebrow>
        <Badge variant="violet">TOP 0.04%</Badge>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{
          width: 56, height: 56, borderRadius: 999,
          background: "linear-gradient(135deg, #4FA8FF, #36E2D2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 18, color: "#07080A",
        }}>KZ</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>@kazuya</div>
          <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4 }}>
            412 boosts · 73% win · avg +18 LP · EUW · Mid / Jungle
          </div>
        </div>
        <Button variant="ghost" size="sm">View profile</Button>
      </div>
    </div>
  );
}

window.OrderPage = OrderPage;
