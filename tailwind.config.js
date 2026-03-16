/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#101116",
      },
    },
    screens: {
      400: { max: "400px" },
      420: { max: "420px" },
      480: { max: "480px" },
      576: { max: "576px" },
      640: { max: "640px" },
      768: { max: "768px" },
      960: { max: "960px" },
      1024: { max: "1024px" },
      1200: { max: "1200px" },
      1400: { max: "1400px" },
    },
  },
  plugins: [],
};
