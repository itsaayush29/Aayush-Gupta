import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        "bg-secondary": "#0B1020",
        accent: "#00F5FF",
        purple: "#7B61FF",
        green: "#00FFB3",
        success: "#00E676",
        warning: "#FFC857",
        danger: "#FF5D73",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;