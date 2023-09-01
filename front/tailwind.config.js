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
        habitDefaultBorder: '#484F62',
        habitLightColor: '#51586B',
        habitLightText: '#BFC4D0',
        
        completionRed: '#933F34',
        completionOrange: '#DA8607',
        completionYellow: '#EFC900',
        completionGreenYellow: '#A0BF22',
        completionGreen: '#338517',
  
      },

      gridTemplateRows:{
        7: 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [],
}

