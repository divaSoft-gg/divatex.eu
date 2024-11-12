/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideLtr: "slideLtr 20s linear infinite", // LTR animation
        slideRtl: "slideRtl 20s linear infinite", // RTL animation
      },
      keyframes: {
        slide: {
          "0%": { left: "0%" },
          "100%": { left: "-100%" },
        },
        slideLtr: {
          "0%": { left: "0%" },
          "100%": { left: "-100%" },
        },
        slideRtl: {
          "0%": { left: "-100%" },
          "100%": { left: "0%" },
        },
      },
    },
  },
  darkMode: "class",

  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      prefix: "ui",
      defaultTheme: "light",
      addCommonColors: false,
      themes: { light: {}, dark: {} },
    }),
  ],
};
