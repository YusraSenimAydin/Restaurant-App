/* @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "card": "repeat(auto-fill, minmax(150px, 1fr))"
      },
      colors: {
        'categories': '#e07a5f',
        'categories-hover': '#81b29a',
        'custom-blue': '#3d405b',
        'custom-yellow': '#f2cc8f'
      }
    },
  },
  plugins: [],
}