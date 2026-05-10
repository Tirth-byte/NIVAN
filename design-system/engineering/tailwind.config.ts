/**
 * Vantage — Tailwind v4 config (TypeScript)
 *
 * The CSS variables in `app/globals.css` (mirrored from the project-root
 * `colors_and_type.css`) are the source of truth. This config exposes them
 * as Tailwind utilities. To change a token, edit `globals.css`, not this file.
 */
import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // we ship dark-only for v1; class hook is for future light
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { DEFAULT: "100%", "2xl": "1280px" },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        bg:           "var(--bg)",
        "surface-1":  "var(--surface-1)",
        "surface-2":  "var(--surface-2)",
        "surface-3":  "var(--surface-3)",
        "surface-4":  "var(--surface-4)",

        "text-primary":   "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted":     "var(--text-muted)",
        "text-disabled":  "var(--text-disabled)",
        "text-inverse":   "var(--text-inverse)",

        "border-faint":  "var(--border-faint)",
        border:          "var(--border)",
        "border-strong": "var(--border-strong)",
        "border-focus":  "var(--border-focus)",

        violet: { DEFAULT: "var(--accent-violet)", soft: "var(--violet-soft)" },
        azure:  { DEFAULT: "var(--accent-azure)",  soft: "var(--azure-soft)"  },
        cyan:   { DEFAULT: "var(--accent-cyan)",   soft: "var(--cyan-soft)"   },

        success: { DEFAULT: "var(--success)", soft: "var(--success-soft)" },
        warning: { DEFAULT: "var(--warning)", soft: "var(--warning-soft)" },
        danger:  { DEFAULT: "var(--danger)",  soft: "var(--danger-soft)"  },
        info:    "var(--info)",
      },

      backgroundImage: {
        "grad-brand":      "var(--grad-brand)",
        "grad-brand-soft": "var(--grad-brand-soft)",
        "grad-bloom":      "var(--grad-bloom)",
        "grad-text":       "var(--grad-text)",
      },

      fontFamily: {
        display: "var(--font-display)",
        body:    "var(--font-body)",
        mono:    "var(--font-mono)",
      },

      fontSize: {
        "display-1": ["var(--text-display-1)", { lineHeight: "var(--lh-tight)", letterSpacing: "var(--tr-display)" }],
        "display-2": ["var(--text-display-2)", { lineHeight: "var(--lh-tight)", letterSpacing: "var(--tr-display)" }],
        "display-3": ["var(--text-display-3)", { lineHeight: "var(--lh-snug)",  letterSpacing: "var(--tr-display)" }],
        h1:    ["var(--text-h1)",      { lineHeight: "var(--lh-snug)",  letterSpacing: "var(--tr-heading)" }],
        h2:    ["var(--text-h2)",      { lineHeight: "var(--lh-snug)",  letterSpacing: "var(--tr-heading)" }],
        h3:    ["var(--text-h3)",      { lineHeight: "var(--lh-snug)",  letterSpacing: "var(--tr-heading)" }],
        h4:    ["var(--text-h4)",      { lineHeight: "var(--lh-snug)",  letterSpacing: "var(--tr-heading)" }],
        body:  ["var(--text-body)",    { lineHeight: "var(--lh-relaxed)", letterSpacing: "var(--tr-body)" }],
        "body-sm": ["var(--text-body-sm)", { lineHeight: "var(--lh-normal)" }],
        caption: ["var(--text-caption)", { lineHeight: "var(--lh-normal)" }],
        micro:   ["var(--text-micro)",   { lineHeight: "1.2", letterSpacing: "var(--tr-eyebrow)" }],
      },

      spacing: {
        // 4px grid mirrored from CSS vars; Tailwind's default scale already covers most.
        // Keep these for explicit token references in design reviews.
        "space-1": "var(--space-1)",
        "space-2": "var(--space-2)",
        "space-3": "var(--space-3)",
        "space-4": "var(--space-4)",
        "space-6": "var(--space-6)",
        "space-8": "var(--space-8)",
        "space-12": "var(--space-12)",
        "space-16": "var(--space-16)",
        "space-20": "var(--space-20)",
      },

      borderRadius: {
        xs:  "var(--radius-xs)",
        sm:  "var(--radius-sm)",
        md:  "var(--radius-md)",
        lg:  "var(--radius-lg)",
        xl:  "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        pill: "var(--radius-pill)",
      },

      boxShadow: {
        "1": "var(--shadow-1)",
        "2": "var(--shadow-2)",
        "3": "var(--shadow-3)",
        pop: "var(--shadow-pop)",
        "inset-top":        "var(--inset-top)",
        "inset-top-strong": "var(--inset-top-strong)",
        "glow-violet": "var(--glow-violet)",
        "glow-azure":  "var(--glow-azure)",
        "glow-cyan":   "var(--glow-cyan)",
        "glow-cta":    "var(--glow-cta)",
        focus:         "var(--focus-ring)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        micro: "120ms",
        sm:    "220ms",
        md:    "380ms",
        lg:    "600ms",
      },

      keyframes: {
        shimmer:  { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        pulseDot: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.4" } },
        floatY:   { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        marquee:  { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        shimmer:  "shimmer 1.4s ease-in-out infinite",
        pulseDot: "pulseDot 1.4s ease-in-out infinite",
        floatY:   "floatY 6s cubic-bezier(0.22,1,0.36,1) infinite",
        marquee:  "marquee 40s linear infinite",
      },

      zIndex: {
        base: "0", raised: "10", sticky: "100", overlay: "1000", modal: "2000", toast: "3000",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;
