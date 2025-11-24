/** @type {import('tailwindcss').Config} */
const themes = require("daisyui/src/theming/themes");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // 👇 custom LIGHT theme (red secondary)
      {
        light: {
          ...themes["light"],
          secondary: "#dc2626", // red-600
          accent: "#dc2626",
        },
      },
      // 👇 custom DARK theme (already working, but keep it here)
      {
        dark: {
          ...themes["dark"],
          secondary: "#dc2626",
          accent: "#dc2626",
        },
      },

      // other built-ins you might want available
      "cupcake",
      "emerald",
      "corporate",
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
