module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          light: '#91a88c',
          dark: '#4a584b'
        },
        red:{
          light:'#F74700',
          dark:'#B53A25'
        }
      },
      height:{
        '85vh':"85vh",
      },
      inset: {
       '18%': '18%',
       '30%': '30%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
