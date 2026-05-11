import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  plugins: [require("@tailwindcss/typography")],
};

export default config;