const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const path = require('path')
const resolve = dir => path.join(__dirname, '', dir)

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'calibur - 控制台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://static.calibur.tv/favicon.ico'
      }
    ]
  },

  /**
   * Global middleware
   */
  router: {
    middleware: ['auth']
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#409eff' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/vendor/styles/index.scss',
    'normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui',
    '~/plugins/prototype',
    '~/plugins/vue-awesome',
    '~/plugins/axios'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['vue-awesome'],
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|vendor)/,
          enforce: 'pre'
        })
      }
    },
    extractCSS: true,
    plugins: (() => {
      const result = [new LodashModuleReplacementPlugin()]
      return isDev
        ? result.concat([])
        : result.concat([
            new CompressionPlugin({
              test: /\.(js|css|html)$/
            }),
            new BrotliPlugin({
              test: /\.(js|css|html)$/
            })
          ])
    })(),
    babel: {
      plugins: ['babel-plugin-lodash']
    }
  }
}
