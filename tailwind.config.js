/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "atlas-bg": "#0a0a0f",
        "atlas-card": "#111118",
        "atlas-border": "#1e1e2e",
        "atlas-purple": "#7c3aed",
        "atlas-purple-light": "#a78bfa",
        "atlas-green": "#4ade80",
        base: "#050a0f",
        surface: "#0d1520",
        card: "#111c2d",
        border: "#1e2d42",
        green: "#00d4aa",
        indigo: "#6366f1",
        muted: "#4a6080",
        subtle: "#94a3b8",
        text: "#e2e8f0"
      },
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(0, 212, 170, 0.18)"
      }
    }
  },
  plugins: []
};
