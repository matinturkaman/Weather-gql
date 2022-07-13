/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-blue': '#1762B6',
        'light-blue': '#176FD6'
      },
      backgroundImage: {
        bgDark: "url('./src/assets/images/bg.jpg')",
        bgLight: "url('./src/assets/images/bg-light.jpg')",
      },
    },
  },
  plugins: [],
}
