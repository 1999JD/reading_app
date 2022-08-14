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
    { src: '~/plugins/yup.js', ssr: true },
    { src: '~/plugins/drag.js', ssr: false },
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
    // '@nuxtjs/pwa',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    endpoints: 'http:172.16.131.46:7690',
    prefix: '/api',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   meta: {
  //     title: 'readingApp',
  //     author: 'Me',
  //   },
  //   manifest: {
  //     name: 'readingApp',
  //     short_name: 'reading',
  //     descripotion: 'fantasitc literacy reading app',
  //     lang: 'en',
  //   },
  //   workbox: {
  //     dev: process.env.NODE_ENV !== 'production'
  //   },
  //   icon: {
  //     fileName: 'icon.png',
  //     size: [64, 120, 144, 152, 384, 512],

  //   }
  // },
  serverMiddleware: [
    { path: '/api', handler: '~/server/app.js' }
  ],
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
  },
  // video: ['src', 'poster'],
  // audio: 'src',
}