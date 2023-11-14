/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,vue,js}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Montserrat"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'pyblue': '#334f7d',
        'pyyellow': '#ffc82a',
        'pygray': '#646464',
      },
    },
  },
  plugins: [],
}
