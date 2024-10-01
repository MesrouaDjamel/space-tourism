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
        blue900: "#0B0D17",
        blue300: "#D0D6F9",
      },

      keyframes: {
        entrance: {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50%)" },
        },
      },

      animation: {
        entrance: "entrance 5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
