// Dashboard — Overview tab

function Overview() {
  return (
    <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Stat row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        <StatCard label="Active orders" value="2" delta="" tone="cyan"/>
        <StatCard label="LP gained · 7d" value="+184" delta="↑ 22%" tone="violet"/>
        <StatCard label="Win rate · 30d" value="73%" delta="↑ 4.2"/>
        <StatCard label="Wallet balance" value="$84.20" delta="" tone="ghost"/>
      </div>

      {/* Active order — featured */}
      <div style={{
        background: "var(--surface-2)", border: "1px solid var(--border)",
        borderRadius: 16, padding: 24, boxShadow: "var(--inset-top)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Eyebrow>Live order</Eyebrow>
            <Badge variant="success"><LiveDot/>IN PROGRESS</Badge>
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>VTG‑8K3‑42091</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <RankCrest tier="D2" color="var(--accent-cyan)" size={56}/>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.02em" }}>Diamond II → Master</div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)", marginTop: 4 }}>League of Legends · EUW · Solo carry</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 8 }}>
              <span style={{ color: "var(--text-secondary)" }}>Progress</span>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>62% · 12 of 19 wins</span>
            </div>
            <div style={{ height: 8, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden", marginBottom: 24 }}>
              <div style={{ width: "62%", height: "100%", background: "var(--grad-brand)", borderRadius: 999 }}/>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              <Mini label="Win rate" value="73%" delta="↑ 4.2"/>
              <Mini label="Avg LP" value="+18"/>
              <Mini label="ETA" value="02d 11h"/>
            </div>
          </div>
          <ChatPreview/>
        </div>
      </div>

      {/* Order list */}
      <div>
        <Eyebrow style={{ marginBottom: 14 }}>Recent activity</Eyebrow>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { id: "VTG‑8K3‑42088", from: "P3", to: "D4",  status: "Queued", booster: "—", pct: 8, eta: "—", color: "var(--text-secondary)" },
            { id: "VTG‑8K3‑41902", from: "G1", to: "P4",  status: "Completed", booster: "miko",   pct: 100, eta: "Done", color: "var(--success)" },
            { id: "VTG‑8K3‑41754", from: "S2", to: "G3",  status: "Completed", booster: "ren",    pct: 100, eta: "Done", color: "var(--success)" },
            { id: "VTG‑8K3‑41633", from: "B4", to: "S1",  status: "Refunded",  booster: "—",      pct: 35,  eta: "—",  color: "var(--danger)" },
          ].map((o) => <OrderRow key={o.id} {...o}/>)}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, delta, tone = "" }) {
  const colors = {
    violet: "rgba(124,92,255,0.10)",
    cyan:   "rgba(54,226,210,0.10)",
    ghost:  "transparent",
  };
  return (
    <div style={{
      background: "var(--surface-2)", border: "1px solid var(--border)",
      borderRadius: 12, padding: 22, boxShadow: "var(--inset-top)",
      backgroundImage: tone === "violet" || tone === "cyan" ? `radial-gradient(120% 80% at 100% 0%, ${colors[tone]}, transparent)` : "none",
    }}>
      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-secondary)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontFeatureSettings: '"tnum"', fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", marginTop: 10 }}>{value}</div>
      {delta && <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--success)", marginTop: 6 }}>{delta}</div>}
    </div>
  );
}

function Mini({ label, value, delta }) {
  return (
    <div>
      <div style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 600, marginTop: 4 }}>{value}</div>
      {delta && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--success)", marginTop: 2 }}>{delta}</div>}
    </div>
  );
}

function ChatPreview() {
  return (
    <div style={{
      background: "var(--surface-3)", border: "1px solid var(--border)",
      borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 10,
      boxShadow: "var(--inset-top)", height: "100%", minHeight: 240,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: "linear-gradient(135deg, #4FA8FF, #36E2D2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#07080A", fontWeight: 700, fontSize: 11 }}>KZ</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500 }}>@kazuya</div>
            <div style={{ fontSize: 10, color: "var(--success)" }}>● online</div>
          </div>
        </div>
        <Badge variant="ghost">BOOSTER</Badge>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, marginTop: 6 }}>
        <Msg from="them">gg, just hit promos.</Msg>
        <Msg from="them">2/2 win. queueing again now.</Msg>
        <Msg from="me">ty, take your time</Msg>
      </div>
      <div style={{ display: "flex", gap: 8, paddingTop: 8, borderTop: "1px solid var(--border)" }}>
        <input placeholder="Reply…" style={{
          flex: 1, height: 32, padding: "0 12px", background: "var(--surface-2)",
          border: "1px solid var(--border)", borderRadius: 8, color: "var(--text-primary)",
          fontFamily: "var(--font-body)", fontSize: 12,
        }}/>
        <Button variant="primary" size="sm">Send</Button>
      </div>
    </div>
  );
}

function Msg({ from, children }) {
  const isMe = from === "me";
  return (
    <div style={{
      alignSelf: isMe ? "flex-end" : "flex-start",
      maxWidth: "82%",
      background: isMe ? "var(--violet-soft)" : "var(--surface-2)",
      color: isMe ? "#C9BCFF" : "var(--text-primary)",
      border: isMe ? "1px solid rgba(124,92,255,0.25)" : "1px solid var(--border)",
      padding: "6px 10px", borderRadius: 10, fontSize: 12, lineHeight: 1.4,
    }}>{children}</div>
  );
}

function OrderRow({ id, from, to, status, booster, pct, eta, color }) {
  return (
    <div style={{
      background: "var(--surface-2)", border: "1px solid var(--border)",
      borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 16,
      boxShadow: "var(--inset-top)",
    }}>
      <RankCrest tier={from} color="var(--text-secondary)" size={32}/>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 8 }}>
          {from} → {to}
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)", fontWeight: 400 }}>{id}</span>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 3 }}>{booster !== "—" ? `Booster @${booster}` : "Awaiting match"}</div>
      </div>
      <div style={{ width: 120, height: 4, borderRadius: 999, background: "var(--surface-3)", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: pct === 100 ? "var(--success)" : "var(--grad-brand)" }}/>
      </div>
      <div style={{ width: 90, fontFamily: "var(--font-mono)", fontSize: 12, textAlign: "right", color }}>{status}</div>
    </div>
  );
}

window.Overview = Overview;
