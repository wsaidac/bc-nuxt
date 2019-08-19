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
    vueI18n: {
      fallbackLocale: defaultLocale,
      silentTranslationWarn: true,
      dateTimeFormats: merchantConfig,
      numberFormats: merchantConfig,
      messages: {
        [defaultLocale]: require(defaultLocaleFile), //eslint-disable-line
      },
    },
  };
};
