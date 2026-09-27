import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        charcoal: {
          DEFAULT: "#111110",
          2: "#1a1a18",
          3: "#242420",
          4: "#2e2e2a",
          5: "#3a3a34",
        },
        ivory: {
          DEFAULT: "#f5f0e8",
          dim: "#c8c2b4",
          mute: "#7a7570",
        },
        gold: {
          DEFAULT: "#b89a5e",
          light: "#d4b47a",
          dim: "#7a6438",
          subtle: "rgba(184,154,94,0.12)",
        },
        burgundy: {
          DEFAULT: "#7c2d3e",
          light: "#a03550",
        },
        "green-pulse": "#4ade80",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: { container: "1160px" },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "scroll-bob": "scrollBob 2.4s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.5s ease forwards",
      },
      keyframes: {
        scrollBob: {
          "0%,100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        pulseDot: {
          "0%,100%": { boxShadow: "0 0 4px rgba(74,222,128,0.4)" },
          "50%": { boxShadow: "0 0 12px rgba(74,222,128,0.8)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gold-shimmer":
          "linear-gradient(135deg, #b89a5e 0%, #d4b47a 50%, #b89a5e 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
