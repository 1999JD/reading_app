module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)'
        },
        gray: {
          divide: 'var(--color-gray-divide)',
          mainentries: 'var(--color-gray-mainentries)'
        },
        highlight: {
          DEFAULT: 'var(--color-highlight)',
        }
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
}
