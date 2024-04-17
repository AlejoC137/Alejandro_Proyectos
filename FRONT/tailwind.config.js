/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ttff}"],
  theme: {
    height: {
      '120': '35rem', // Cambia '120' por el nombre que quieras y '30rem' por la altura deseada
    },
 
    extend: { colors:{
      pureRed: '#ff0000'
    },
    fontFamily:{
      'Montserrat':['Montserrat' , 'sans-serif']
    }

    },
  },
  plugins: [],
}

