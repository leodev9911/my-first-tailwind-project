/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: 'var(--dark-violet)',
        grayishBlue: 'var(--grayish-blue)',
        darkViolet: 'var(--very-dark-violet)',
        darkGrayishViolet: 'var(--dark-grayish-violet)',
        veryLightGray: 'var(--very-light-gray)'
      },
    },
  },
  plugins: [],
}

