// Dashboard sidebar — fixed left nav

function Sidebar({ active, setActive }) {
  const items = [
    { id: "overview", icon: "chart",   label: "Overview" },
    { id: "orders",   icon: "trophy",  label: "Active orders", badge: "2" },
    { id: "history",  icon: "clock",   label: "Match history" },
    { id: "wallet",   icon: "lock",    label: "Wallet" },
    { id: "support",  icon: "headset", label: "Support" },
    { id: "settings", icon: "target",  label: "Settings" },
  ];
  return (
    <aside style={{
      width: 248, flexShrink: 0,
      background: "var(--surface-1)",
      borderRight: "1px solid var(--border)",
      display: "flex", flexDirection: "column", padding: "20px 14px",
      position: "sticky", top: 0, height: "100vh", boxSizing: "border-box",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px 24px" }}>
        <LogoMark size={28}/>
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>vantage</span>
      </div>

      <Eyebrow style={{ padding: "12px 10px 8px" }}>Player</Eyebrow>
      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((it) => (
          <button key={it.id} onClick={() => setActive(it.id)} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "10px 12px", border: "none", borderRadius: 8,
            background: active === it.id ? "var(--surface-3)" : "transparent",
            color: active === it.id ? "var(--text-primary)" : "var(--text-secondary)",
            fontFamily: "var(--font-body)", fontSize: 14, cursor: "pointer",
            textAlign: "left", width: "100%",
            boxShadow: active === it.id ? "var(--inset-top)" : "none",
            transition: "all 120ms cubic-bezier(0.22,1,0.36,1)",
          }}>
            <Icon name={it.icon} size={16}/>
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.badge && <Badge variant="violet">{it.badge}</Badge>}
          </button>
        ))}
      </nav>

      <div style={{ marginTop: "auto", padding: 14, background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 12, boxShadow: "var(--inset-top)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: "linear-gradient(135deg, #7C5CFF, #36E2D2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#07080A", fontWeight: 700, fontSize: 13 }}>VX</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Vexen</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Diamond II · EUW</div>
          </div>
        </div>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", fontSize: 11 }}>
          <span style={{ color: "var(--text-secondary)" }}>Wallet</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-cyan)" }}>$84.20</span>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
