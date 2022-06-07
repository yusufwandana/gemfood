module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        // 'home': "url('/src/images/bg-home.jpg')", // Photo by cottonbro from Pexels
        'home'        : "url('/src/images/pexels-daria-shevtsova-704971 - large.jpg')", // Photo by cottonbro from Pexels
        'home-mobile' : "url('/src/images/pexels-daria-shevtsova-704971 - small.jpg')", // Photo by cottonbro from Pexels
        'about'       : "url('/src/images/pexels-fauxels-3182759.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
