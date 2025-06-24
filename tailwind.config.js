/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Cormorant', 'serif'],
        'text': ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};