// Dashboard top bar — search, notifications, wallet

function TopBar({ title }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(7,8,10,0.7)", backdropFilter: "blur(20px) saturate(140%)",
      borderBottom: "1px solid var(--border)",
      padding: "16px 32px", display: "flex", alignItems: "center", gap: 20,
    }}>
      <div style={{ flex: 1 }}>
        <Eyebrow style={{ marginBottom: 4 }}>Dashboard</Eyebrow>
        <h2 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>{title}</h2>
      </div>
      <div style={{ position: "relative", width: 320 }}>
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}>
          <Icon name="search" size={14}/>
        </span>
        <input placeholder="Search orders, boosters, transactions…" style={{
          width: "100%", height: 38, paddingLeft: 36, paddingRight: 12,
          background: "var(--surface-2)", border: "1px solid var(--border)",
          borderRadius: 8, color: "var(--text-primary)",
          fontFamily: "var(--font-body)", fontSize: 13, boxSizing: "border-box",
        }}/>
      </div>
      <button style={{
        position: "relative", width: 38, height: 38, borderRadius: 8,
        background: "var(--surface-2)", border: "1px solid var(--border)",
        color: "var(--text-secondary)", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name="bell" size={16}/>
        <span style={{ position: "absolute", top: 8, right: 8, width: 6, height: 6, borderRadius: 999, background: "var(--accent-cyan)", boxShadow: "0 0 8px var(--accent-cyan)" }}/>
      </button>
      <Button variant="primary" size="sm" iconRight={<span style={{ fontFamily: "var(--font-mono)" }}>+</span>}>
        New order
      </Button>
    </header>
  );
}
window.TopBar = TopBar;
