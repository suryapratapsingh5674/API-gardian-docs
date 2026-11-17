/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#070b14',
          900: '#0c1222',
          850: '#101728',
          800: '#131b2e',
          700: '#1c263f',
          600: '#253354',
        },
      },
    },
  },
  plugins: [],
};

