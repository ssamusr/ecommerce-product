/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#1d2025',
        'grayish-blue': '#68707d',
        'light-grayish-blue': '#f7f8fd'
      }
    }
  },
  plugins: []
}
