/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ["Manrope", "sans-serif"],
      },
      colors: {
        'orange': '#D87D4A',
        'black': '#111010',
        'light-gray': '#f1f1f1',
        'dark-white': '#fafafa'
      },
      screens: {
        sm: '23.4375rem',
        md: '43.0625rem',
        lg: '61rem',
        xl: '69.375rem',
      },
    },
  },
  plugins: [],
}