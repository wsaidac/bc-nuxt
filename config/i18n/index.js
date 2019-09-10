const { pick, sortBy } = require('lodash');
const merchantsConfig = require('./merchantsConfig');
const localesConfig = require('./localesConfig');

module.exports = function (label) {
  const { locales, defaultLocale } = merchantsConfig[label];
  const defaultLocaleFile = `../../client/assets/locales/translation-files/${defaultLocale}.json`;
  const merchantConfig = pick(localesConfig, locales);
  const sortedLocales = sortBy(merchantConfig, 'displayName');

  return {
    strategy: 'prefix',
    seo: false,
    parsePages: false,
    lazy: true,
    langDir: 'assets/locales/translation-files/',
    locales: Object.values(sortedLocales),
    defaultLocale,
    pages: {
      'country-restricted': false,
    },
    vueI18n: {
      fallbackLocale: defaultLocale,
      silentTranslationWarn: true,
      dateTimeFormats: merchantConfig,
      numberFormats: merchantConfig,
      messages: {
        [defaultLocale]: require(defaultLocaleFile), //eslint-disable-line
      },
    },
    vuex: {
      mutations: {
        setLocale: 'SET_LOCALE_MUTATION',
        setMessages: 'SET_MESSAGE_MUTATION',
        setRouteParams: 'SET_ROUTE_PARAMS_MUTATION',
      },
      syncLocale: true,
      syncMessages: true,
      syncRouteParams: true,
    },
  };
};
