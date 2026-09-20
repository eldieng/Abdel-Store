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
        // Charte Nexora : noir + bleu sac (#444D9C)
        primary: {
          DEFAULT: "#444D9C",
          light: "#5B67B8",
          dark: "#333A7A",
          50: "#EEF0F8",
        },
        secondary: {
          DEFAULT: "#1A1C24",
          light: "#2A2D38",
          dark: "#0F1117",
        },
        accent: {
          DEFAULT: "#5B67C7",
          light: "#7B85D6",
          dark: "#444D9C",
        },
        // Alias historiques (ex-olive Fabiram) → bleu Nexora
        olive: {
          DEFAULT: "#444D9C",
          light: "#5B67B8",
          dark: "#2E3470",
        },
        cream: {
          DEFAULT: "#F5F6FB",
          dark: "#EBEDF5",
        },
        beige: "#F5F6FB",
        sand: "#E4E7F2",
        bark: "#0F1117",
        leaf: "#5B67C7",
        nexora: {
          blue: "#444D9C",
          black: "#0F1117",
          soft: "#F5F6FB",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        body: ["var(--font-geist-sans)", "Arial", "sans-serif"],
      },
      borderRadius: {
        organic: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
