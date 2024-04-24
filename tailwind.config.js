/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark': '#0f172a',
        'secondary': '#64748b',
        'biru': '#22a2f7',
        'langit': '#d9f0ff',
      },
      screens: {
        '2xl': '1320px',
      },
    },

  },
  plugins: [],
}

