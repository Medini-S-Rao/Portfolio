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
        dark: "#0f172a",
        darker: "#020617",
        accent: "#d946ef",
        "accent-light": "#f472b6",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "gradient-accent": "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
