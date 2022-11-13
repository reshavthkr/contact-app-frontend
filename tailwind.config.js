/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#242629',
        'background2': '#16161a',
        'white': '#fffffe',
        'dull': '#94a1b2',
        'btn-color': '#7f5af0',
        'text-green': '#2cb67d',
        'secondary': '#72757e'
      }
    },
  },
  plugins: [],
}
