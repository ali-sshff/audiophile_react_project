/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/home/desktop/heroImage.png')",
        'home-image': "url('/src/assets/home/desktop/image-speaker-zx7.jpg')",
      },
      fontFamily: {
        primaryFont: ["Manrope", "sans-serif"],
      },
      colors: {
        'orange': '#D87D4A',
        'black':  '#0E0E0E;',
        'light-gray': '#f1f1f1',
        'dark-white': '#fafafa',
        'light-orange': '#fbaf85'
      },
      screens: {
        sm: '23.4375rem',
        md: '43.0625rem',
        lg: '61rem',
        xl: '70rem',
      },
    },
  },
  plugins: [],
}