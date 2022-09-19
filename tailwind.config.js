/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
