module.exports = {
  purge: [
    '_site/**/*.html',
    '_site/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      pink: {
        // theme('colors.pink.light)
        light: '#F0D9D5',
        // theme('colors.pink.primary)
        primary: '#F4088A',
        dark: '#A7035E'
      },
      black: '#161616',
      grey: {
        light: '#DBDAD6',
        dark: '#6E6F6E'
      }
    },
    fontFamily: {
      'sans': ['Open Sans', 'Helvetica Neue', 'sans-serif'],
      'serif': ['Acumin Pro Light', 'serif'],
      'display': ['Adelle Sans'],
      'body': ['Acumin Pro', 'serif']
    },
    minHeight: {
      'nav': '64px'
    },
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus']
    },
  },
  plugins: [],
}
