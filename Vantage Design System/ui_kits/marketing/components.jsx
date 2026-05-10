// Vantage marketing — shared primitives
// Exports to window so other Babel scripts can use them.

const { useState, useEffect, useRef } = React;

function Icon({ name, size = 18, stroke = 1.5, className = "", style = {} }) {
  // Hand-drawn Lucide-style 24x24 paths for the few icons we use.
  // Round caps, round joins, currentColor.
  const paths = {
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6"/>,
    arrowUpRight: <path d="M7 17L17 7M7 7h10v10"/>,
    check: <path d="M20 6L9 17l-5-5"/>,
    chevronDown: <path d="M6 9l6 6 6-6"/>,
    plus: <path d="M12 5v14M5 12h14"/>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    zap: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>,
    headset: <><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1v-6h3v4zM3 19a2 2 0 002 2h1v-6H3v4z"/></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
    trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 11-10 0V4z"/><path d="M17 4h3v3a3 3 0 01-3 3M7 4H4v3a3 3 0 003 3"/></>,
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    sword: <><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6M16 16l4 4M19 21l2-2"/></>,
    chart: <><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></>,
    crown: <path d="M3 19h18M3 7l5 5 4-8 4 8 5-5v12H3V7z"/>,
    bell: <><path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 01-3.4 0"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/></>,
    star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
    twitter: <path d="M18 4h3l-7 8 8 8h-6l-5-6-6 6H2l8-9L2 4h6l5 5 5-5z"/>,
    discord: <><path d="M5 17l-1 4 5-2"/><path d="M19 17l1 4-5-2"/><ellipse cx="12" cy="12" rx="9" ry="7"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/></>,
    twitch: <path d="M4 3h16v12l-5 5h-4l-3 3v-3H4z"/>,
    youtube: <><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9l5 3-5 3z"/></>,
    refund: <><path d="M3 12a9 9 0 109-9"/><path d="M3 4v5h5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={stroke}
         strokeLinecap="round" strokeLinejoin="round"
         className={className} style={style}>
      {paths[name] || paths.target}
    </svg>
  );
}

function GradientText({ children, style }) {
  return <span style={{
    background: "var(--grad-text)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    ...style,
  }}>{children}</span>;
}

function Eyebrow({ children, color = "var(--text-secondary)", style }) {
  return <div style={{
    fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
    color, fontWeight: 500, ...style,
  }}>{children}</div>;
}

function LiveDot({ color = "var(--success)" }) {
  return <span style={{
    width: 6, height: 6, borderRadius: 999, background: color,
    boxShadow: `0 0 8px ${color}`, display: "inline-block",
    animation: "vtgPulse 2s infinite cubic-bezier(0.22,1,0.36,1)",
  }}/>;
}

function Badge({ children, variant = "ghost", style = {} }) {
  const variants = {
    ghost:   { bg: "rgba(255,255,255,0.04)", color: "var(--text-secondary)", border: "var(--border)" },
    violet:  { bg: "var(--violet-soft)", color: "#C9BCFF", border: "rgba(124,92,255,0.25)" },
    azure:   { bg: "var(--azure-soft)",  color: "#9CD0FF", border: "rgba(79,168,255,0.25)" },
    cyan:    { bg: "var(--cyan-soft)",   color: "#9AF0E5", border: "rgba(54,226,210,0.25)" },
    success: { bg: "var(--success-soft)", color: "#7FE5BA", border: "rgba(54,211,153,0.25)" },
    warning: { bg: "var(--warning-soft)", color: "#FFD089", border: "rgba(255,181,71,0.25)" },
    danger:  { bg: "var(--danger-soft)",  color: "#FFA0B5", border: "rgba(255,92,124,0.25)" },
  };
  const v = variants[variant] || variants.ghost;
  return <span style={{
    display: "inline-flex", alignItems: "center", gap: 6,
    height: 24, padding: "0 10px", borderRadius: 999,
    fontSize: 11, fontWeight: 500, letterSpacing: "0.04em",
    background: v.bg, color: v.color, border: `1px solid ${v.border}`,
    ...style,
  }}>{children}</span>;
}

function Button({ children, variant = "primary", size = "md", as = "button", icon, iconRight, style = {}, ...rest }) {
  const sizes = {
    sm: { h: 32, padX: 12, fs: 13, r: 8 },
    md: { h: 40, padX: 18, fs: 14, r: 8 },
    lg: { h: 52, padX: 24, fs: 16, r: 10 },
  }[size];
  const variants = {
    primary: {
      background: "var(--grad-brand)", color: "#fff", border: "none",
      boxShadow: "var(--inset-top-strong), 0 0 32px rgba(124,92,255,0.35)",
    },
    secondary: {
      background: "var(--surface-3)", color: "var(--text-primary)",
      border: "1px solid var(--border-strong)", boxShadow: "var(--inset-top)",
    },
    ghost: {
      background: "transparent", color: "var(--text-primary)",
      border: "1px solid var(--border)",
    },
    link: { background: "transparent", color: "var(--text-primary)", border: "none", padding: 0, height: "auto" },
  };
  const Tag = as;
  return (
    <Tag {...rest} className={"vtg-btn " + (rest.className || "")} style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      height: sizes.h, padding: `0 ${sizes.padX}px`, borderRadius: sizes.r,
      fontFamily: "var(--font-body)", fontSize: sizes.fs, fontWeight: 500,
      letterSpacing: "-0.005em", cursor: "pointer",
      transition: "all 200ms cubic-bezier(0.22,1,0.36,1)",
      ...variants[variant],
      ...(variant === "link" ? { padding: 0, height: "auto" } : {}),
      ...style,
    }}>
      {icon}
      {children}
      {iconRight}
    </Tag>
  );
}

function Card({ children, selected = false, hoverable = true, padding = 24, style = {}, ...rest }) {
  return (
    <div {...rest} className={"vtg-card " + (rest.className || "")} style={{
      background: "var(--surface-2)",
      border: selected ? "1px solid transparent" : "1px solid var(--border)",
      borderRadius: 12,
      padding,
      boxShadow: selected
        ? "var(--glow-violet), var(--inset-top)"
        : "var(--inset-top)",
      transition: "all 220ms cubic-bezier(0.22,1,0.36,1)",
      position: "relative",
      ...(selected ? {
        backgroundImage: "linear-gradient(var(--surface-2), var(--surface-2)), var(--grad-brand)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      } : {}),
      ...style,
    }}>
      {children}
    </div>
  );
}

function LogoMark({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="vlm" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7C5CFF"/>
          <stop offset="0.55" stopColor="#4FA8FF"/>
          <stop offset="1" stopColor="#36E2D2"/>
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0E1014"/>
      <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" stroke="rgba(255,255,255,0.08)"/>
      <path d="M14 40 L24 22 L32 36 L40 22 L50 40" stroke="url(#vlm)" strokeWidth="3.5"
            strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="32" cy="46" r="2.2" fill="url(#vlm)"/>
    </svg>
  );
}

function RankCrest({ tier = "D", color = "var(--accent-cyan)", size = 44 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 8,
      background: "var(--surface-3)", border: "1px solid var(--border)",
      boxShadow: "var(--inset-top)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-mono)", fontSize: size * 0.36, color, fontWeight: 600,
    }}>{tier}</div>
  );
}

function ArcPattern({ size = 480, opacity = 1 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 360 360" fill="none" style={{ opacity }}>
      <defs>
        <linearGradient id="arcg" x1="0" y1="0" x2="360" y2="360">
          <stop offset="0" stopColor="#7C5CFF" stopOpacity="0.6"/>
          <stop offset="1" stopColor="#36E2D2" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      <circle cx="180" cy="180" r="160" stroke="url(#arcg)" strokeWidth="1" strokeDasharray="2 6"/>
      <circle cx="180" cy="180" r="130" stroke="url(#arcg)" strokeWidth="1" opacity="0.6"/>
      <circle cx="180" cy="180" r="100" stroke="url(#arcg)" strokeWidth="1" opacity="0.45"/>
      <path d="M 60 180 A 120 120 0 0 1 300 180" stroke="url(#arcg)" strokeWidth="2" fill="none"/>
      <path d="M 100 180 A 80 80 0 0 1 260 180" stroke="url(#arcg)" strokeWidth="1.5" fill="none" opacity="0.7"/>
    </svg>
  );
}

function GradientBloom({ children, height = 720 }) {
  return (
    <div style={{ position: "relative", overflow: "hidden", height, isolation: "isolate" }}>
      <div style={{
        position: "absolute", inset: "-100px", zIndex: 0,
        background: "var(--grad-bloom)", filter: "blur(40px)",
      }}/>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        opacity: 0.05, mixBlendMode: "overlay", pointerEvents: "none",
      }}/>
      <div style={{ position: "relative", zIndex: 1, height: "100%" }}>{children}</div>
    </div>
  );
}

function Container({ children, max = 1200, style = {} }) {
  return <div style={{
    maxWidth: max, margin: "0 auto", padding: "0 24px", width: "100%",
    boxSizing: "border-box", ...style,
  }}>{children}</div>;
}

function Section({ children, padY = 120, style = {}, id }) {
  return <section id={id} style={{
    padding: `${padY}px 0`, position: "relative", ...style,
  }}>{children}</section>;
}

Object.assign(window, {
  Icon, GradientText, Eyebrow, LiveDot, Badge, Button, Card,
  LogoMark, RankCrest, ArcPattern, GradientBloom, Container, Section,
});
