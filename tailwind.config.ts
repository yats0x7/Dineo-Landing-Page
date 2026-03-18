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
        primary: {
          DEFAULT: "#C2640E",
          dark: "#9A4E0A",
          light: "#F5E6D8",
        },
        background: "#FFFAF6",
        text: {
          primary: "#1A0F00",
          secondary: "#6B4C2A",
        },
        accent: "#F59E0B",
        success: "#16A34A",
        border: "#E8D5C0",
      },
      borderRadius: {
        '2xl': '16px',
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(194,100,14,0.15)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
