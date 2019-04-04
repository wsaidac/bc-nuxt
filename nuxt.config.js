
const i18nConfig = require('./config/i18nConfig.js');

require('dotenv').config();


const label = 'rapido';

const conf = {
  head: {
    title: 'rapido_web',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ async: true, src: '//cg.sb.blueconic.net/frontend/static/javascript/blueconic/blueconic.min.js' }],
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
    extractCSS: process.env.NODE_ENV !== 'development',
  },
  styleResources: {
    scss: './assets/stylesheets/_shared.scss',
  },
  render: {
    static: {
      maxAge: '30d',
    },
    dist: {
      maxAge: '30d',
      immutable: true,
      public: true,
    },
    csp: {
      policies: {
        'script-src': [
          "'unsafe-eval'",
          "'unsafe-inline'",
          'https://www.googletagmanager.com',
          'https://tagmanager.google.com',
          'https://www.googleadservices.com',
          'https://www.google-analytics.com',
          '*.blueconic.net',
          '*.rapido.com',
          '*.cgaws.cloud',
        ],
        'style-src': ["'self'", "'unsafe-inline'", 'https://tagmanager.google.com', 'https://fonts.googleapis.com', '*.rapido.com', '*.cgaws.cloud'],
        'img-src': ["'self'", "'unsafe-inline'", 'https://ssl.gstatic.com', '*.rapido.com', '*.cgaws.cloud'],
        'report-uri': [
          'https://sentry.io/api/1424268/security/?sentry_key=c82b3b97e8af426da4eb2b24099ca8ff',
        ],
      },
    },
  },
  router: {
    middleware: ['headers', 'context'],
  },
  modules: [
    ['@nuxtjs/style-resources'],
    ['@nuxtjs/sentry'],
    ['~/modules/iconsWeb'],
    [
      'artemis-graphql',
      {
        browserUri: 'env://API_BROWSER',
        serverUri: 'env://API_SERVER',
        extendedHeaders: 'extendedGraphqlHeaders',
      },
    ],
    ['nuxt-i18n', i18nConfig(label)],
  ],
  env: {
    API_BROWSER: process.env.API_BROWSER,
    API_SERVER: process.env.API_SERVER,
    GTM_ID: process.env.GTM_ID_RAPIDO,
    GTM_DEBUG: process.env.NODE_ENV === 'development',
    DOMAIN: 'www.rapido.com',
    LABEL: label,
  },
  plugins: [
    '~/plugins/vuetouch.js',
    '~/plugins/media-queries.js',
    '~/assets/iconsWeb.js',
    { src: '~/plugins/gtm.js', ssr: false },
    '~/plugins/cookie-store.js',
    { src: '~/plugins/async.js', ssr: false },
    '~/plugins/shared.js',
  ],
  sentry: {
    dsn: process.env.SENTRY_DNS,
    config: {
      disabled: process.env.NODE_ENV === 'development',
    }, // Additional config
  },
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
