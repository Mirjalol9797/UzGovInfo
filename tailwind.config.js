/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./composables/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  safelist: [
    {
      pattern: /(bg|text|border)-(23b250|2f80ed|ffda34|f0d043|008dd2|b6b7c3)/,
      variants: ["hover"],
    },
    "text-[#23b250]",
    "text-[#b6b7c3]",
    "text-[#727272]",
    "text-[#008dd2]",
    "bg-[#23b250]",
    "bg-[#f0d043]",
    "bg-[#151415e0]",
    "rotate-180",
    "product-list__banner-full",
  ],

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
