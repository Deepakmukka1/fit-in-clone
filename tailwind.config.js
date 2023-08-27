/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#DEE2E6",
          25: '#9EA1A4',
          50:'#9b9ea1',
          100: "#dee2e6",
          200: "#ced4da",
          300: "#343A40",
          500: "#495057",
        },
        textprimary: {
          DEFAULT: "#666666",
          50: '#767676',
          100: "#555555",
          200: "#333333",
          300: '#a5aaae',
          400: '#cccccc',
          500: '#222222'
        },
        badgegreen: '#69db7c',
        badgeorange: '#ffa94d'
       
      },
    },
  },
  plugins: [],
};
