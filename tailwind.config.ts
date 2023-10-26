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
        background: "rgb(var(--color-background) / <alpha-value>)",
        titleOrange: "rgb(var(--color-title) / <alpha-value>)",
        bannerOrange: "rgb(var(--color-banner) / <alpha-value>)",
        profileOrange: "rgb(var(--color-profile) / <alpha-value>)",
        message: "rgb(var(--color-message) / <alpha-value>)",
        bannerBlue: "rgb(var(--color-detail-banner) / <alpha-value>)",
        detailTitle: "rgb(var(--color-detail-title) / <alpha-value>)",
        detailTitleBg: "rgb(var(--color-detail-title-bg) / <alpha-value>)",
        detailInfoBg: "rgb(var(--color-detail-info-bg) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        stars: "url('/src/public/photos/stars.jpg')",
      },
      fontFamily: {
        starwars: ["StarWars", "sans"],
        verdana: ["verdana", "arial", "sans-serif", "helvetica"],
      },
    },
  },
  plugins: [],
};
export default config;
