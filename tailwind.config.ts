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
        accent: {
          DEFAULT: '#6C63FF',
          warm:    '#FF6B6B',
          teal:    '#4ECDC4',
        },
        onyx: {
          DEFAULT: '#080808',
          50:      '#0E0E0E',
          100:     '#141414',
          200:     '#1C1C1C',
          300:     '#282828',
          400:     '#383838',
        },
        ash: {
          DEFAULT: '#888888',
          light:   '#AAAAAA',
          dark:    '#555555',
        },
        cream: '#F4F4F4',
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
