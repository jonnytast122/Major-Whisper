/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'black': '#000000',
      '27272E': '#27272E',
      '425466': '#425466',
      '7A828A': '#7A828A',
      'EDF2F7': '#EDF2F7',
      '718096': '#718096',
      '777E90': '#777E90',
      'CFCFCF': '#CFCFCF',
      '7E7E7E': '#7E7E7E',
      '666666': '#666666',
      'gray': '#425466',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      inter: ['Inter', 'sans-serif'],
      inter_regular: ['Inter', 'sans-serif'],
      dm_sans: ['DM Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}