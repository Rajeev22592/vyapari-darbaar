/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        brand: '#EA580C',
        brandDark: '#C2410C',
      },
      borderRadius: {
        xl: '12px',
      },
    },
  },
  plugins: [],
};