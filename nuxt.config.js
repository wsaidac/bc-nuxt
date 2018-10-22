require('dotenv').config();

module.exports = {
  head: {
    title: 'rapido_web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [{ src: '~/assets/stylesheets/application.scss', lang: 'scss' }],
  store: true,
  loading: { color: '#3B8070' },
  build: {
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
  modules: [
    ['~/modules/icons'],
    ['artemis-graphql', {
      browserUri: 'env://API_BROWSER',
      serverUri: 'env://API_SERVER',
    }],
    ['~/modules/disable-default-router'],
  ],
  plugins: [
    '~/assets/icons.js',
    '~/plugins/env.js',
    '~/plugins/i18n.js',
    '~/plugins/init.js',
  ],
  watchers: {
    webpack: {
      poll: true,
    },
  },
};
