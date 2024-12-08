/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#37A000',
          dark: '#2C8000',
          light: '#43BF00'
        },
        secondary: {
          DEFAULT: '#1C67B0',
          dark: '#145289',
          light: '#2479CC'
        },
        accent: {
          DEFAULT: '#FF6B00',
          dark: '#CC5500',
          light: '#FF8533'
        }
      }
    },
  },
  plugins: [],
};