/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '35rem',
        '128':'40rem',
        '140':'50rem'
      },
      fontFamily: {
        'rale': ['Raleway']
      },
      scale: {
        '110': ['1.10'],
        '120': ['1.20']
      },
    },
  },
  plugins: [],
}