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
        '1/5': '20%',
        'over': 'calc(100% + 1px)'
      },
      width: {
        12.5: '3.125rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        31: '7.75rem',
        35: '8.75rem',
        45: '11.25rem',
        65: '16.25rem',
        67: '16.75rem',
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
        12: '3rem',
        'screen-no-footer': 'calc(100vh - 72px)',
        'account-main': '28.875rem',
      },
      colors: {
        baseFont: '#363636',
        primary: '#FFF1CF',
        yellow: {
          pale: '#FFD784',
          DEFAULT: '#FFC651',
        },
        blue: '#A9E2E3',
        red: {
          DEFAULT: '#FFB9AA',
          dark: '#E8746E',
        },
        tangerine: '#EB7513',
        gray: {
          100: '#F8F8F8',
          300: '#C4C4C4',
          500: '#8D8D8D',
          700: '#999999'
        }
      },
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        sm: '0px 2px 4px rgba(174, 174, 174, 0.25)',
        md: '1px 1px 4px rgba(0, 0, 0, 0.25)',
        lg: '0px 2px 4px rgba(174, 174, 174, 0.25)'
      }

    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      borderStyle: ['hover', 'focus'],
      outline: ['focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],

}
