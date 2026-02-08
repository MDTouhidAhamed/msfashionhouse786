/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Optional: Add a fancy font in index.html for this to work
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}