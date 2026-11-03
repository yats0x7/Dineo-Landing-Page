import type { Config } from "tailwindcss";

// One ground, one ink, one accent. The accent is the Dineo tile's orange
// (public icon, #d97706); `action` is a deeper cut of it so white button
// text passes contrast. Surfaces are told apart by tone, never by lines.
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#F2F1EF",
        surface: "#E8E3DC",
        ink: "#1C1410",
        muted: "#5C5047",
        night: "#1C1410",
        "night-muted": "#BBAE9F",
        tile: "#D97706",
        "tile-soft": "#F6D7AA",
        action: { DEFAULT: "#B45309", dark: "#92400E" },
        sun: "#F59E0B",
        veg: "#15803D",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "system-ui", "sans-serif"],
      },
      fontSize: {
        small: ["0.9375rem", { lineHeight: "1.45" }],
        body: ["clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)", { lineHeight: "1.5" }],
        lead: ["clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)", { lineHeight: "1.35" }],
        head: ["clamp(2.25rem, 1.4rem + 3.2vw, 4rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        display: ["clamp(2.75rem, 0.5rem + 5.6vw, 6rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
      },
      borderRadius: {
        // The Dineo tile's corner: a quarter of a 56px block.
        tile: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
