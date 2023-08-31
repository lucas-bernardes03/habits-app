/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
            "./src/**/*.{js,jsx,ts,tsx}"
          ],
  theme: {
    extend: {
      colors:{
        background: "#181C29",
        habitDefaultBg: '#363D4F',
        habitDefaultBorder: '#484F62'
      },
      fontFamily:{
        regular: 'Inter_400Regular',
        semibold: 'Inter_600SemiBold',
        bold: 'Inter_700Bold',
        extrabold: 'Inter_800ExtraBold'
      }
    },
  },
  plugins: [],
}

