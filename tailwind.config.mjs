/** @type {import('tailwindcss').Config} */

const baseThemes = require("daisyui/src/theming/themes");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      // ⭐ Customized CORPORATE theme (primary = RED)
      {
        corporate: {
          ...baseThemes["corporate"],
          primary: "#dc2626",          // red-600
          "primary-focus": "#b91c1c",  // red-700
          "primary-content": "#ffffff"
        },
      },

      // ⭐ Keep DARK mode untouched
      "dark",

      // ⭐ Leave all default DaisyUI themes available for future use
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
