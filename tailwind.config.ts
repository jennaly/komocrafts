import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "128": "32rem",
      },
      colors: {
        "komo-bg": "#F8F3F2",
        "komo-beaver": "#937C6A",
        "komo-coffee": "#674E3A",
        "komo-latte": "#ECE1D7",
        "shop-overlay": "#201916",
      },
    },
  },
  plugins: [],
};
export default config;
