require('dotenv').config();

const conf = {
  head: {
    title: 'rapido_web',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [{ src: '~/assets/stylesheets/application.scss', lang: 'scss' }],
  store: true,
  loading: { color: '#3B8070' },
  build: {
    styleResources: {
      scss: './assets/stylesheets/_shared.scss',
    },
    publicPath: '/rapidoweb/',

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
  router: {
    middleware: ['headers', 'context'],
  },
  modules: [
    ['~/modules/icons'],
    [
      'artemis-graphql',
      {
        browserUri: 'env://API_BROWSER',
        serverUri: 'env://API_SERVER',
        extendedHeaders: 'extendedGraphqlHeaders',
      },
    ],
  ],
  plugins: ['~/assets/icons.js', '~/plugins/env.js', '~/plugins/i18n.js', { src: '~/plugins/gtm.js', ssr: false }, '~/plugins/cookie-store.js', { src: '~/plugins/async.js', ssr: false }],
  watchers: {
    webpack: {
      poll: true,
    },
  },
};

if (process.env.PROXY_ACCOUNT) {
  conf.modules.push('@nuxtjs/proxy');
  conf.proxy = [process.env.PROXY_ACCOUNT, process.env.PROXY_SESSIONS, process.env.PROXY_ASSETS, process.env.PROXY_ORDER];
}

module.exports = conf;
