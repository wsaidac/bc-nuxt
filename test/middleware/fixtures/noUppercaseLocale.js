import i18nConfig from '~~/config/i18n';

const i18n = i18nConfig('rapido');

const cookies = {};

module.exports = {
  app: {
    i18n,
    $cookies: {
      get: (v) => cookies[v],
      set: jest.fn(),
    },
  },
  redirect: jest.fn(),
  route: {
    path: '/de-AT/', // uppercase ===> lowercase
  },
  req: {
    headers: {
      'cloudfront-viewer-country': 'DK',
    },
  },
  query: {
  },
};
