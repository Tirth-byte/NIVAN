// Rank selector — current → desired with crests, tier dots, division steppers

const TIERS = [
  { name: "Iron",       short: "I",  color: "#7A7E89" },
  { name: "Bronze",     short: "B",  color: "#A57250" },
  { name: "Silver",     short: "S",  color: "#B6BCC7" },
  { name: "Gold",       short: "G",  color: "#E0B872" },
  { name: "Platinum",   short: "P",  color: "#36E2D2" },
  { name: "Emerald",    short: "E",  color: "#36D399" },
  { name: "Diamond",    short: "D",  color: "#7C5CFF" },
  { name: "Master",     short: "M",  color: "#C9BCFF" },
  { name: "Grandmaster",short: "GM", color: "#FF5C7C" },
  { name: "Challenger", short: "C",  color: "#FFD089" },
];

function RankSelector({ from, setFrom, to, setTo }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 16, alignItems: "stretch" }}>
      <RankColumn title="Current rank" tier={from} setTier={setFrom}/>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)" }}>
        <Icon name="arrowRight" size={28}/>
      </div>
      <RankColumn title="Desired rank" tier={to} setTier={setTo} highlight/>
    </div>
  );
}

function RankColumn({ title, tier, setTier, highlight }) {
  return (
    <div style={{
      background: "var(--surface-2)", border: "1px solid var(--border)",
      borderRadius: 16, padding: 20, boxShadow: "var(--inset-top)",
    }}>
      <Eyebrow style={{ marginBottom: 16 }}>{title}</Eyebrow>
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
        <BigCrest tier={tier} highlight={highlight}/>
        <div>
          <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em" }}>{TIERS[tier.tierIdx].name}</div>
          <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 2 }}>Division {["IV","III","II","I"][tier.div]}</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 14 }}>
        {TIERS.map((t, i) => (
          <button key={t.name} onClick={() => setTier({ ...tier, tierIdx: i })} style={{
            padding: "8px 0",
            background: tier.tierIdx === i ? "var(--surface-4)" : "var(--surface-3)",
            border: tier.tierIdx === i ? `1px solid ${t.color}` : "1px solid var(--border)",
            borderRadius: 8, color: tier.tierIdx === i ? t.color : "var(--text-secondary)",
            fontFamily: "var(--font-mono)", fontSize: 12, cursor: "pointer",
            transition: "all 120ms cubic-bezier(0.22,1,0.36,1)",
          }}>{t.short}</button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
        <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>Division</span>
        <div style={{ display: "flex", gap: 4 }}>
          {[0,1,2,3].map((d) => (
            <button key={d} onClick={() => setTier({ ...tier, div: d })} style={{
              width: 32, height: 28,
              background: tier.div === d ? "var(--surface-4)" : "transparent",
              border: tier.div === d ? "1px solid var(--border-strong)" : "1px solid var(--border)",
              borderRadius: 6, color: tier.div === d ? "var(--text-primary)" : "var(--text-secondary)",
              fontFamily: "var(--font-mono)", fontSize: 11, cursor: "pointer",
            }}>{["IV","III","II","I"][d]}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function BigCrest({ tier, highlight }) {
  const t = TIERS[tier.tierIdx];
  return (
    <div style={{
      width: 64, height: 64, borderRadius: 14,
      background: "var(--surface-3)", border: `1px solid ${highlight ? t.color : "var(--border)"}`,
      boxShadow: highlight ? `var(--inset-top), 0 0 24px ${t.color}40` : "var(--inset-top)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 600, color: t.color,
    }}>{t.short}</div>
  );
}

window.RankSelector = RankSelector;
window.RANK_TIERS = TIERS;
