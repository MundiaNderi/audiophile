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
       }
    },
     fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      }, 
  },
  plugins: [],
}