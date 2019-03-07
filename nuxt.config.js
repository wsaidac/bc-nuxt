const dotenv = require('dotenv');
const locales = require('./assets/locales/locales.js');

dotenv.config();

const conf = {
  head: {
    title: 'rapido_web',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/stylesheets/application.scss'],
  store: true,
  loading: { color: '#3B8070' },
  build: {
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

      config.module.rules.push({
        test: /\.html$/,
        use: ['html-loader'],
      });
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-preset-env': {},
      },
    },
    extractCSS: process.env.NODE_ENV === 'production',
  },
  styleResources: {
    scss: './assets/stylesheets/_shared.scss',
  },
  render: {
    static: {
      maxAge: 2592000000,
    },
    csp: true,
  },
  router: {
    middleware: ['headers', 'context'],
  },
  modules: [
    ['@nuxtjs/style-resources'],
    ['~/modules/iconsWeb'],
    [
      'artemis-graphql',
      {
        browserUri: 'env://API_BROWSER',
        serverUri: 'env://API_SERVER',
        extendedHeaders: 'extendedGraphqlHeaders',
      },
    ],
    [
      'nuxt-i18n',
      {
        strategy: 'prefix',
        seo: false,
        parsePages: false,
        lazy: true,
        langDir: './assets/locales/',
        locales,
        defaultLocale: 'en-us',
        vueI18n: {
          fallbackLocale: 'en-us',
        },
      },
    ],
  ],
  env: {
    API_BROWSER: process.env.API_BROWSER,
    API_SERVER: process.env.API_SERVER,
    GTM_ID: 'GTM - KWZLG26',
    GTM_DEBUG: 'true',
  },
  plugins: ['~/assets/iconsWeb.js', { src: '~/plugins/gtm.js', ssr: false }, '~/plugins/cookie-store.js', { src: '~/plugins/async.js', ssr: false }, '~/plugins/shared.js'],
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
