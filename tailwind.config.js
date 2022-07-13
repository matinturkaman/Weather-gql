/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-blue': '#1762B6',
        'light-blue': '#176FD6',
      },
    },
  },
  plugins: [],
}
