/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ttff}"],
  theme: {
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

