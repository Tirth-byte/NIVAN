// Configurator — game/queue/region selects, add-on toggles, duo toggle

function Configurator({ config, setConfig }) {
  const games = ["League of Legends", "Valorant", "Apex Legends", "Overwatch 2", "Rocket League", "CS2"];
  const queues = ["Solo/Duo", "Flex"];
  const regions = ["NA", "EUW", "EUNE", "KR", "OCE"];
  const addOns = [
    { id: "stream",   label: "Live stream",       desc: "Watch your booster play in real time.", price: 8 },
    { id: "offrole",  label: "Off-role guarantee", desc: "Booster mains your champ pool.",       price: 12 },
    { id: "priority", label: "Priority queue",    desc: "Start within 4 minutes, guaranteed.",   price: 15 },
    { id: "vpn",      label: "Region-locked VPN", desc: "Booster connects from your region.",    price: 0, included: true },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Game / queue / region row */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 12 }}>
        <Select label="Game" options={games} value={config.game} onChange={(v) => setConfig({ ...config, game: v })}/>
        <Select label="Queue" options={queues} value={config.queue} onChange={(v) => setConfig({ ...config, queue: v })}/>
        <Select label="Region" options={regions} value={config.region} onChange={(v) => setConfig({ ...config, region: v })}/>
      </div>

      {/* Mode segmented */}
      <div>
        <Eyebrow style={{ marginBottom: 10 }}>Mode</Eyebrow>
        <div style={{
          display: "inline-flex", background: "var(--surface-2)", border: "1px solid var(--border)",
          borderRadius: 10, padding: 4, gap: 2,
        }}>
          {[
            { v: "solo", l: "Solo carry", d: "We climb on your account" },
            { v: "duo",  l: "Duo queue",  d: "You play alongside a pro" },
          ].map((m) => (
            <button key={m.v} onClick={() => setConfig({ ...config, mode: m.v })} style={{
              padding: "10px 18px", border: "none",
              background: config.mode === m.v ? "var(--surface-4)" : "transparent",
              color: config.mode === m.v ? "var(--text-primary)" : "var(--text-secondary)",
              borderRadius: 7, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 500,
              cursor: "pointer", transition: "200ms cubic-bezier(0.22,1,0.36,1)",
              boxShadow: config.mode === m.v ? "var(--inset-top)" : "none",
            }}>
              <div>{m.l}</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, fontWeight: 400 }}>{m.d}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div>
        <Eyebrow style={{ marginBottom: 12 }}>Add‑ons</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {addOns.map((a) => {
            const active = a.included || config.addOns?.[a.id];
            return (
              <button key={a.id} onClick={() => !a.included && setConfig({ ...config, addOns: { ...config.addOns, [a.id]: !active } })}
                disabled={a.included}
                style={{
                  background: active ? "var(--surface-3)" : "var(--surface-2)",
                  border: active ? "1px solid var(--border-strong)" : "1px solid var(--border)",
                  borderRadius: 12, padding: 16, display: "flex", alignItems: "center", gap: 14,
                  cursor: a.included ? "default" : "pointer",
                  textAlign: "left", boxShadow: "var(--inset-top)",
                  transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
                }}>
                <Check on={active}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text-primary)" }}>{a.label}</div>
                  <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2 }}>{a.desc}</div>
                </div>
                {a.included
                  ? <Badge variant="success">INCLUDED</Badge>
                  : <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-primary)" }}>+ ${a.price}</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Select({ label, options, value, onChange }) {
  return (
    <div>
      <Eyebrow style={{ marginBottom: 8 }}>{label}</Eyebrow>
      <div style={{ position: "relative" }}>
        <select value={value} onChange={(e) => onChange(e.target.value)} style={{
          appearance: "none", WebkitAppearance: "none",
          width: "100%", height: 44, padding: "0 38px 0 14px",
          background: "var(--surface-2)", border: "1px solid var(--border)",
          borderRadius: 8, color: "var(--text-primary)",
          fontFamily: "var(--font-body)", fontSize: 14, cursor: "pointer",
        }}>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
        <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }}>
          <Icon name="chevronDown" size={16}/>
        </span>
      </div>
    </div>
  );
}

function Check({ on }) {
  return (
    <div style={{
      width: 22, height: 22, borderRadius: 6,
      background: on ? undefined : "var(--surface-2)",
      backgroundImage: on ? "var(--grad-brand)" : "none",
      border: on ? "1px solid transparent" : "1px solid var(--border-strong)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {on && <Icon name="check" size={14} stroke={2.5} style={{ color: "#fff" }}/>}
    </div>
  );
}

window.Configurator = Configurator;
