/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '500',
        'bold': '500',
        'extrabold': '500',
        'black': '500',
      }
    },
  },
  plugins: [],
};
