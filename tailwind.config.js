/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#FD9A08', 
        secondary: '#515151',
        color:'#F1F0EF'
      },
      container:{
        center:true,
        padding:{
          default:"1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        },
      },
      fontFamily: {
        danfo: ['Danfo'],
      },
      
    },
  },
  plugins: [],
}