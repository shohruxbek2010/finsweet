/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        main:{
          'blue':'#1C1E53',
          'yellow': '#FCD980',
          'gray': '#EEF4FA',
          'text-color': '#282938'
        }
      },
      fontFamily:{
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
      },
      maxWidth:{
        'base': '1320px'
      }
    },
  },
  plugins: [],
}