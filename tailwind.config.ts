import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "dropdown-arrow": "url('~/public/dropdown-arrow.svg')",
        "cover-marble": "url('~/public/cover.png')",
        "gray-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(250, 250, 250, 0.97) 48.44%, #F5F5F5 100%)",
      },
      fontFamily: {
        "sans-inter": ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: "",
        link: "#cbcbc4",
        secondary: "linear-gradient(28deg,#e0c394,#f9deaf 50%,#e0c394)",
        hover: "#bda070",
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        md: ["14px", "16px"],
        base: ["16px", "24px"],
        lg: ["20px", "24px"],
        xl: ["24px", "32px"],
        "xl-2": ["28px", "32px"],
        "2xl": ["36px", "44px"],
        "3xl": ["48px", "56px"],
        "4xl": ["64px", "80px"],
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
      },
      boxShadow: {
        base: "2px 4px 12px 0px rgba(33, 33, 33, 0.05)",
      },
      borderRadius: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
      },
    },
  },
  plugins: [],
};
export default config;
