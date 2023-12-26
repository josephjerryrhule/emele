import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emeleblack: "#181717",
        emelered: "#6a1f1f",
      },
    },
    //Screen sizes
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1650px",
      xxl: "1920px",
    },
  },
  plugins: [],
};
export default config;
