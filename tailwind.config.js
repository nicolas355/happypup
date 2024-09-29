/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          main_color:'#22a7f0'
        }

    },
  },
  plugins: [],
}