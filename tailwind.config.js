module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.tsx',
    './lib/**/*.tsx'
  ],
  theme: {

    extend: {
      colors: {
        'brand': {
          50: '#FFF7E7',
          300: '#ffeccf',
          500: '#FFC87E',
          900: '#FAA534',
          1100: '#E49B37'
        },
      },
    }
  },
}
