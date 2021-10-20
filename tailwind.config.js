module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        nithin:
{
  50: '#fdfce0',
  100: '#f5f3b9',
  200: '#eeeb90',
  300: '#e7e265',
  400: '#e0da3b',
  500: '#c6c122',
  600: '#9a9618',
  700: '#6e6b0f',
  800: '#424005',
  900: '#171500',
},

navCol:
{
  50: '#e8efff',
  100: '#c3d0f0',
  200: '#2B3148',
  300: '#7790d4',
  400: '#5171c8',
  500: '#3857ae',
  600: '#2b4488',
  700: '#1e3062',
  800: '#101d3d',
  900: '#030a1a',
}
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
