/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'petnet-white': '#FAFAFA',
      'petnet-orange': '#EE7124',
      'petnet-purple': '#8834D1',
      'petnet-blue': '#2A7FED',
      'petnet-green': '#BFF44A',
      'petnet-yellow': '#FFED65'
    },
    extend: {},
  },
  plugins: [],
}