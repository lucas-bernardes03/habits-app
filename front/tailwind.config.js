/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        bg: '#181C29',
        habitDefaultBg: '#363D4F',
        habitDefaultBorder: '#484F62'
      },

      gridTemplateRows:{
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

