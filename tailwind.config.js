module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
