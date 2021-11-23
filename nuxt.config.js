export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'literacy_reading_apps',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.5/jszip.min.js'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animation.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/yup.js', ssr: true }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'
  ],
  auth: {
    redirect: {
      login: '/account/login',
      logout: '/',
      callback: 'account/login',
      home: '/',
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token.accessToken',
          maxAge: 1800,
          global: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'token.refreshToken',
          data: 'refreshToken',
          maxAge: false,
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post'
          },
          refresh: {
            url: '/auth/refresh',
            method: 'post'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/user',
            method: 'get',
          }
        },
      }
    },
    plugins: [
      { src: '~/plugins/axios', ssr: true },
      // { src: '~/plugins/route', ssr: true }
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    prefix: '/api',
  },

  proxy: {
    '/api': {
      target:
        process.env.NODE_ENV === 'development'
          ? 'http://127.0.0.1:3000/api/'
          : 'http://127.0.0.1:3000/api/',
      pathRewrite: { '^/api': '/' },
    },
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  serverMiddleware: [
    { path: '/api', handler: '~/server/app.js' }
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    vendor: ['axios'],
    loaders: {
      file: { esModule: false },
      imgUrl: { esModule: false },
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },
  },
  video: ['src', 'poster'],
  source: 'src',
  audio: 'src',
  img: 'src',
  image: ['xlink:href', 'href'],
  use: ['xlink:href', 'href'],
  loading: {
    color: 'Black',
    height: '4px',
    continuous: true,
    duration: 3000
  }
}