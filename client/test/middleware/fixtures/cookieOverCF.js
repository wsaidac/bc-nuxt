import i18nConfig from '~~/config/i18n';

const i18n = i18nConfig('rapido');

const cookies = {
  country: 'da-dk',
};

module.exports = {
  app: {
    i18n,
    $cookies: {
      get: (v) => cookies[v],
    },
  },
  redirect: jest.fn(),
  route: {
    path: '', // no path -> no currentlocale
  },
  req: {
    headers: {
      'cloudfront-viewer-country': 'BE', // available
    },
  },
  query: {
  },
};
