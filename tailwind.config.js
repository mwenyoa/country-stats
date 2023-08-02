/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {},
    screens: {
      xs: '320px', // Extra Small devices
      sm: '640px', // Small devices
      md: '768px', // Medium devices
      lg: '1024px', // Large devices
      xl: '1280px', // Extra Large devices
    },
  },
  plugins: [],
};
