// Sticky glass top nav for vantage.gg

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["Services", "Coaching", "Pricing", "Boosters", "Live"];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(7,8,10,0.72)" : "rgba(7,8,10,0.40)",
      backdropFilter: "blur(20px) saturate(140%)",
      WebkitBackdropFilter: "blur(20px) saturate(140%)",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
    }}>
      <Container max={1200}>
        <div style={{ display: "flex", alignItems: "center", height: 68, gap: 32 }}>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-primary)" }}>
            <LogoMark size={28}/>
            <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em" }}>vantage</span>
          </a>
          <div style={{ display: "flex", gap: 28, marginLeft: 16 }}>
            {links.map((l, i) => (
              <a key={l} href="#" style={{
                color: i === 0 ? "var(--text-primary)" : "var(--text-secondary)",
                fontSize: 14, transition: "color 120ms",
              }}>{l}</a>
            ))}
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            <Badge variant="success"><LiveDot/>1,284 LIVE</Badge>
            <Button variant="ghost" size="sm">Sign in</Button>
            <Button variant="primary" size="sm" iconRight={<span style={{ fontFamily: "var(--font-mono)" }}>→</span>}>Start boost</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

window.Nav = Nav;
