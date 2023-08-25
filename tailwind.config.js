/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#DEE2E6',
        textprimary: '#666666'
      }
    },
  },
  plugins: [],
}