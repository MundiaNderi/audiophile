/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens : {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
       colors: {
        burntSienna : '#D87D4A',
        lightGray: '#F1F1F1',
        charcoalGray: '4C4C4C',
        mellowApricot: '#FBAF85',
        solidBlack: '#000000'
       }
    },
     fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }, 
  },
  plugins: [],
}