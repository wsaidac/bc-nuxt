module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'rapido_web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    styleResources: {
      scss: './assets/stylesheets/_shared.scss',
    },

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  css: [{ src: '~/assets/stylesheets/application.scss', lang: 'scss' }],
  watchers: {
    webpack: {
      poll: true,
    },
  },
  modules: [
    ['~/modules/icons'],
    [
      'artemis-graphql',
      {
        browserUri: 'env://API_BROWSER',
        serverUri: 'env://API_SERVER',
      },
    ],
  ],
  plugins: ['~/assets/icons.js', '~/plugins/i18n.js'],
};
