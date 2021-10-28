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
      width: {
        15: '3.75rem',
        18: '4.5rem',
        12.5: '3.125rem',
        fit: 'fit-content',
        'fill-available': '-webkit-fill-available',
        'book': '',
      },
      height: {
        18: '4.5rem',
        'book': '',
        fit: 'fit-content',
      },
      margin: {
        13: '3.125rem',
        18: '4.5rem',
      },
      padding: {
        1.25: '0.3125rem',
      },
      colors: {
        primary: {
          DEFAULT: '#f5efdf'
        },
        highlight: {
          DEFAULT: '#ffc651'
        },
        third: {
          DEFAULT: '#FFB9AA'
        },
        gray: {
          divide: '#ECECEC',
          mainentries: '#f0f0f0',
          subInfo: '#C8C2AC',

        },
      },
      lineHeight: {
        '20': '5rem',
      },
      boxShadow: {
        'img': ' 0px 2px 2px 0px #80808040',
        'entries': '0px 2px 2px 0px #88888840'
      },
      dropShadow: {
        'footer': '0px -1px 2px rgba(174, 174, 174, 0.25)',
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
