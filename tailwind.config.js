module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontSize: {
        tiny: '.875rem',
        base: '1rem',
        lg: '1.4rem',
        xl: '2rem',
      },
    },
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
