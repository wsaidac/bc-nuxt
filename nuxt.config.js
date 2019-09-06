const i18nConfig = require('./config/i18n');
const cspPolicies = require('./config/csp-policies');

require('dotenv').config();

const label = process.env.LABEL || 'rapido';

const marketingScripts = [
  { src: '/blueconic.js' },
  { src: '//cdn.blueconic.net/cg.js' },
  { src: '/vwo.js' },
  { src: '/riskified.js' },
];

const conf = {
  srcDir: 'client/',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'QE0K3CMCBw6wZF_p7UnOAj_KKcIhfXgpkubjiJQM_KM' },
    ],
    link: [
      {
        rel: 'dns-prefetch',
        href: '//fonts.googleapis.com',
      },
      {
        rel: 'preconnect',

        href: 'https://fonts.gstatic.com/',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,800&display=swap&subset=latin-ext',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: process.env.NODE_ENV === 'production' ? marketingScripts : [{ src: '/phraseapp-editor.js' }],
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
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: 'graphql-tag/loader',
        },
      });

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
        // 'tailwindcss': path.resolve(__dirname, './config/tailwind/tailwind.config.js'),
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
    scss: '~/assets/stylesheets/_shared.scss',
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
        'script-src': cspPolicies.scripts,
        'style-src': cspPolicies.styles,
        'frame-src': cspPolicies.iframes,
        'worker-src': cspPolicies.workers,
        'report-uri': cspPolicies.reports,
      },
    },
  },
  router: {
    middleware: ['checkLocale', 'strip-trailing-slash'],
  },
  modules: [
    ['@nuxtjs/style-resources'],
    // '@nuxtjs/tailwindcss',
    'cookie-universal-nuxt',
    ['@nuxtjs/sentry'],
    ['~/modules/iconsWeb'],
    ['nuxt-i18n', i18nConfig(label)],
    'portal-vue/nuxt',
  ],
  env: {
    API_BROWSER: process.env.API_BROWSER,
    API_SERVER: process.env.API_SERVER,
    GTM_ID: process.env.GTM_ID,
    GTM_DEBUG: process.env.NODE_ENV === 'development',
    LABEL: label,
    ENABLE_PHRASEAPP_EDITOR: process.env.ENABLE_PHRASEAPP_EDITOR,
  },
  plugins: [
    '~/plugins/artemis.js',
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
    '~/plugins/click-outside-directive.js',
    '~/plugins/fragment.js',
  ],
  // tailwindcss: {
  //   configPath: '~~/config/tailwind/tailwind.config.js',
  //   cssPath: '~/assets/stylesheets/tailwind.css',
  // },
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
  conf.proxy = [
    process.env.PROXY_ACCOUNT,
    process.env.PROXY_SESSIONS,
    process.env.PROXY_ASSETS,
    process.env.PROXY_ORDER,
  ];
}

module.exports = conf;
