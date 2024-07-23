/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      height:{
        header : '560px',
        rate: '400px',
      },
      fontSize:{
        h1 :'2.6rem',
      },
      screens:{
        xs : '475px'
      },
      colors: {
        main : '#32012F',
        dry   :'#5B345B',
        subMain : '#3F0D3F',
        star:'#FFB000',

      }
    },
  },
  plugins: [],
}

