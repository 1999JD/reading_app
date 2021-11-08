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
      inset: {
        13: '3.25rem',
        31: '7.75rem',
        33: '8.25rem',
        '-33': '-8.25rem',
      },
      width: {
        15: '3.75rem',
        18: '4.5rem',
        12.5: '3.125rem',
        31: '7.75rem',
        35: '8.75rem',
        45: '11.25rem',
        65: '16.25rem',
        fit: 'fit-content',
        'fill-available': '-webkit-fill-available',
        'book': '',
      },
      height: {
        13: '3.25rem',
        31: '7.75rem',
        35: '8.75rem',
        45: '11.25rem',
        18: '4.5rem',
        82: '20.5rem',
        'book': '',
        fit: 'fit-content',
      },
      maxWidth: {
        'account-modal': '204px',
      },
      minHeight: {
        'account-main': '28.875rem',
      },
      margin: {
        7.5: '1.875rem',
        13: '3.125rem',
        18: '4.5rem',
        30: '7.5rem',
        34: '8.5rem',
      },
      padding: {
        1.25: '0.3125rem',
        7.5: '1.875rem',
        21.5: '5.375rem',
      },
      colors: {
        primary: {
          DEFAULT: '#f5efdf',
          dark: '#CCBC90',
        },
        highlight: {
          DEFAULT: '#ffc651',
          light: '#FFDF88',
        },
        third: {
          DEFAULT: '#FFB9AA'
        },
        quote: {
          DEFAULT: '#EB7513'
        },
        gray: {
          divide: '#ECECEC',
          mainentries: '#f0f0f0',
          memberbg: '#F5F5F5',
          subInfo: '#C8C2AC',
          order: '#999999',
          mask: 'rgba(96, 96, 96, 0.7)',
          accountInput: '#B9B9B9',
          accountInputFocus: '#969696',
          accountPlaceholder: '#B5B5B5',

        },
      },
      fontSize: {
        '3.5xl': '2rem',
      },
      lineHeight: {
        '20': '5rem',
      },
      borderRadius: {
        '2lg': '0.625rem',
        '2.5xl': '1.25rem',
      },
      boxShadow: {
        'img': ' 0px 2px 2px 0px #80808040',
        'header': '0px 2px 2px 0px #B2B2B240',
        'entries': '0px 2px 2px 0px #88888840',
        'btn': '0px 4px 0px 0px #E7D5A7',
        'btn-pay': '  0px 2px 4px 0px #39393940',
        'account-main': ' 0px 2px 6px 0px #00000040',
        'content': '0px 2px 4px 0px #AEAEAE40',
        'test': '0px 2px 4px 0px #00000040',
      },
      dropShadow: {
        'footer': '0px -1px 2px rgba(174, 174, 174, 0.25)',
        'card': '0px 4px 4px rgba(159, 159, 159, 0.25)',
      },

    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
