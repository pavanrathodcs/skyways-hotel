import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent — muted violet
        accent: "#7C6FCD",
        // Backgrounds
        onyx: {
          DEFAULT: "#080808",
          50:  "#0D0D0D",
          100: "#111111",
          200: "#181818",
          300: "#242424",
          400: "#363636",
        },
        // Text
        ash: {
          DEFAULT: "#6B6B6B",
          light:   "#9A9A9A",
          dark:    "#3A3A3A",
        },
        cream: "#F0F0F0",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
