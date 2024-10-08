/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens :{
        xl : "1296px",
      },
    },
    backgroundImage: {
      'hero-pattern': "url('./Assets/Rectangle 13.svg')",
    }
  },
  plugins: [],
}