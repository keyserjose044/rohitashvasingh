/** @type {import('tailwindcss').Config} */

// Pull in DaisyUI’s built-in theme definitions
const daisyuiThemes = require("daisyui/src/theming/themes");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // 🔴 Custom corporate theme (your light theme) with red secondary
      {
        corporate: {
          ...daisyuiThemes["corporate"],
          secondary: "#dc2626", // roughly tailwind red-600
        },
      },
      // 🔴 Custom dark theme with red secondary as well
      {
        dark: {
          ...daisyuiThemes["dark"],
          secondary: "#f97373", // a bit lighter red for dark mode (optional)
        },
      },

      // The rest are just kept for reference / future reuse
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
  // darkMode remains DaisyUI-based via data-theme; no need to enable here
};
