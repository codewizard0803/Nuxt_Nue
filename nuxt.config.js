module.exports = {
  // Build configuration
  build: {
    // Run ESLINT on save
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    'normalize.css/normalize.css'
  ],

  // Headers of the page
  head: {
    title: 'wp-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700|Roboto:100,300,400' }
    ],
    script: [
      { type: 'text/javascript', src: '/loaded.js', body: true}
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#384D66' },

  plugins: [
    { src: '~plugins/vue-lazyload', ssr: false }
  ]
}
