module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Archivo': ['Archivo', 'sans-serif'] 
      },
      colors: {
        'main-btn': '#423839',
        'main-hover': '#6E6362',
        'main-tab': '#FEB408',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}