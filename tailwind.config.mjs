/** @type {import('tailwindcss').Config} */

// Use DaisyUI's built-in themes as a base
const themes = require("daisyui/src/theming/themes");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // 🔴 Custom CORPORATE (light theme)
      {
        corporate: {
          ...themes["corporate"],
          secondary: "#dc2626", // red for text-secondary, btn-secondary, etc.
        },
      },

      // 🔴 Custom DARK
      {
        dark: {
          ...themes["dark"],
          secondary: "#f97373", // lighter red for dark mode (tweak if you like)
        },
      },

      // All other themes just for future use / reference
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
