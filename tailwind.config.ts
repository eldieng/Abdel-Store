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
        // Charte Abdel Store : noir + or (#DAA43E)
        primary: {
          DEFAULT: "#DAA43E",
          light: "#F1BA46",
          dark: "#B8862D",
          50: "#2A2418",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          light: "#FFFFFF",
          dark: "#D4D4D4",
        },
        accent: {
          DEFAULT: "#F1BA46",
          light: "#FCD76F",
          dark: "#DAA43E",
        },
        olive: {
          DEFAULT: "#DAA43E",
          light: "#F1BA46",
          dark: "#9A7024",
        },
        cream: {
          DEFAULT: "#141414",
          dark: "#0A0A0A",
        },
        beige: "#141414",
        sand: "#2A2A2A",
        bark: "#F5F5F5",
        leaf: "#F1BA46",
        abdel: {
          gold: "#DAA43E",
          goldLight: "#F1BA46",
          goldDark: "#B8862D",
          black: "#000000",
          soft: "#141414",
          card: "#1A1A1A",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        body: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
