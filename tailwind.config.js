/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./**/*.{html,js}'],
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}