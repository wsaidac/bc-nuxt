const i18nConfig = require('./config/i18nConfig.js');

require('dotenv').config();

const label = 'rapido';

const conf = {
  head: {
    titleTemplate: '%s - Rapido.com',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '/blueconic.js' }, { src: '//cdn.blueconic.net/cg.js' }],
  },
  css: ['~/assets/stylesheets/application.scss'],
  store: true,
  loading: {
    color: '#dce6f5',
    height: '2px',
  },
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
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              targets: isServer ? { node: '10' } : { ie: '11' },
              corejs: { version: 2 },
            },
          ],
        ];
      },
    },
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
          '\'unsafe-eval\'',
          '\'unsafe-inline\'',
          'https://www.googletagmanager.com',
          'https://tagmanager.google.com',
          'https://www.googleadservices.com',
          'https://www.google-analytics.com',
          'https://bat.bing.com',
          'https://connect.facebook.net',
          'https://static.hotjar.com',
          'https://script.hotjar.com',
          'https://googleads.g.doubleclick.net',
          '*.trackedlink.net',
          '*.blueconic.net',
          '*.rapido.com',
          '*.cgaws.cloud',
        ],
        'style-src': ['\'self\'', '\'unsafe-inline\'', 'https://tagmanager.google.com', 'https://fonts.googleapis.com', '*.rapido.com', '*.cgaws.cloud'],
        'report-uri': [
          'https://sentry.io/api/1441242/security/?sentry_key=98825ca3d73c4dd58305cd0e794873c4',
        ],
      },
    },
  },
  router: {
    middleware: ['auth', 'headers', 'checkLocale', 'usps'],
  },
  modules: [
    ['@nuxtjs/style-resources'],
    'cookie-universal-nuxt',
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
    '~/plugins/env.js',
    '~/plugins/vuelidate.js',
    '~/plugins/vuetouch.js',
    '~/plugins/media-queries.js',
    '~/assets/iconsWeb.js',
    { src: '~/plugins/gtm.js', ssr: false },
    '~/plugins/cookie-store.js',
    { src: '~/plugins/async.js', ssr: false },
    '~/plugins/shared.js',
    '~/plugins/i18n.js',
    '~/plugins/moment.js',
    '~/plugins/pagination.js',
    '~/plugins/element-ui.js',
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
