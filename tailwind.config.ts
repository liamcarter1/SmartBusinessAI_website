import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy palette (primary background system)
        ink: {
          950: "#05080F",
          900: "#0A0E1A",
          800: "#0F1729",
          700: "#172033",
          600: "#1E2A44",
          500: "#2B3A5C",
        },
        // Brand navy — saturated, matches the logo
        navy: {
          50: "#EEF2F9",
          100: "#D6DFEE",
          200: "#A8BAD8",
          300: "#7892BC",
          400: "#4B6A9C",
          500: "#314E7E",
          600: "#1E3A5F",
          700: "#152A45",
          800: "#0F1F35",
          900: "#0A1428",
        },
        // Refined gold (accent)
        gold: {
          50: "#FBF6E9",
          100: "#F4E9C8",
          200: "#E9D391",
          300: "#DCBC5F",
          400: "#C8A951",
          500: "#B08F3A",
          600: "#8C7029",
          700: "#6B5520",
        },
        // Cool neutral grays calibrated for navy bg
        slate: {
          50: "#F8FAFC",
          100: "#EEF2F8",
          200: "#D6DEEC",
          300: "#A7B3CA",
          400: "#7C8AA8",
          500: "#5B6884",
          600: "#414C66",
          700: "#2E3851",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98) forwards",
        marquee: "marquee 40s linear infinite",
        "grid-pulse": "gridPulse 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        gridPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          from: { backgroundPosition: "200% 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #DCBC5F 0%, #C8A951 50%, #8C7029 100%)",
        "ink-radial": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(220, 188, 95, 0.12), transparent)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
