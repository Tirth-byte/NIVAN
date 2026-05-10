// FAQ — minimal accordion

function Faq() {
  const items = [
    { q: "Is boosting against the rules?",
      a: "Riot, Valve, and EA all have policies against account sharing. Vantage minimizes risk with our VPN protection (booster connects from your region), zero-anomaly scheduling, and an account-takeover detection system. In 7 years, our flag rate is 0.04%." },
    { q: "Will my account get banned?",
      a: "We're so confident in our process that every order ships with a free ban-protection guarantee. If anything happens to your account during the boost, we restore it or refund you in full — your call." },
    { q: "How fast is the average order?",
      a: "Diamond IV → Master takes our fleet 3.2 days on average. You'll see live ETA estimates in the dashboard the moment we match you with a booster (usually under 4 minutes)." },
    { q: "Can I play on my account during the boost?",
      a: "Yes. Schedule windows in the dashboard or just close the app — your booster pauses the moment you log in. We never stack queue with you live." },
    { q: "What if I want to cancel?",
      a: "Refunds are one click. If your order isn't done, we refund the unfinished portion. No tickets, no waiting, no questions." },
    { q: "Do you support duo without streaming?",
      a: "Yes. Duo orders run in stream-off mode by default. Your booster has zero visibility into your gameplay outside of the game itself." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <Section padY={120} id="faq">
      <Container max={860}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow style={{ marginBottom: 12 }}>FAQ</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0 }}>
            Common questions.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.map((it, i) => (
            <FaqItem key={i} q={it.q} a={it.a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)}/>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function FaqItem({ q, a, open, onClick }) {
  return (
    <div style={{
      background: open ? "var(--surface-2)" : "var(--surface-1)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
      overflow: "hidden",
    }}>
      <button onClick={onClick} style={{
        width: "100%", background: "transparent", border: "none",
        padding: "20px 24px", cursor: "pointer",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
        fontFamily: "var(--font-body)", color: "var(--text-primary)",
        fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em",
        textAlign: "left",
      }}>
        {q}
        <span style={{
          color: open ? "var(--accent-cyan)" : "var(--text-muted)",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          transition: "transform 220ms cubic-bezier(0.22,1,0.36,1)",
          display: "inline-flex",
        }}>
          <Icon name="plus" size={16}/>
        </span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0,
        overflow: "hidden",
        transition: "max-height 380ms cubic-bezier(0.22,1,0.36,1)",
      }}>
        <div style={{ padding: "0 24px 22px", fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)" }}>
          {a}
        </div>
      </div>
    </div>
  );
}

window.Faq = Faq;
