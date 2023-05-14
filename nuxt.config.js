const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
      router: {
        base: '/reading_app/'
      }
    }
    : {}



export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'reading_app',
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
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }
    ],
  },
  ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animation.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/yup.js', ssr: false },
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
    '@nuxtjs/pwa',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    prefix: '/api',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: '線上說書',
      author: '1999JD',
      theme_color: '#FFF1CF',
      nativeUI: true
    },
    manifest: {
      name: '線上說書',
      descripotion: '專屬你聆聽的好地方',
    },
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|epub|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  loading: '~/components/common/LoadingBar.vue',
  target: 'static',
  ...routerBase
}