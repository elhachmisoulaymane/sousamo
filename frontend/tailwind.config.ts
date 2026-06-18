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
        veluxa: {
          400: "#E36085",
          500: "#D54775",
          600: "#C8366A",
          700: "#A52854",
        },
        cipria: { 100: "#FBEAEE", 200: "#F5DDE2" },
        crema: { 50: "#FAF5EE" },
        espresso: { 700: "#3D3530", 800: "#2A2421", 900: "#1F1A17" },
        argento: { 200: "#E5E6E7", 300: "#C8CACC" },
        oro: { 400: "#D9A47B", 500: "#C68C5D" },
        success: "#2D8C5F",
        warning: "#D9A47B",
        error: "#C53B3B",
        info: "#2C6B8C",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(31, 26, 23, 0.18)",
        card: "0 10px 40px -12px rgba(31, 26, 23, 0.22)",
        cta: "0 8px 24px -6px rgba(200, 54, 106, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.02)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
        "slide-in-right": "slide-in-right 0.3s ease-out both",
        "pulse-soft": "pulse-soft 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
