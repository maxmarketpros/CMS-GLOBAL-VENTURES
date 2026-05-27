import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          card: "#101013",
          elevated: "#17171B",
          border: "#1F1F24",
        },
        gold: {
          DEFAULT: "#C5A572",
          deep: "#B69F5E",
          bright: "#D4B673",
          soft: "#E8D9B0",
        },
        bone: {
          DEFAULT: "#E5E5E7",
          muted: "#A1A1AA",
          dim: "#71717A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "0",
      },
      letterSpacing: {
        widest: ".18em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 800ms ease-out both",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C5A572 0%, #B69F5E 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #D4B673 0%, #C5A572 100%)",
        "dark-veil": "linear-gradient(180deg, rgba(10,10,11,0.2) 0%, rgba(10,10,11,0.8) 70%, #0A0A0B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
