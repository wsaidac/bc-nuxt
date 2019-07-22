const { pick, sortBy } = require('lodash');
const merchantsConfig = require('./merchantsConfig');
const localesConfig = require('./localesConfig');

module.exports = function (label) {
  const { locales, defaultLocale } = merchantsConfig[label];
  const defaultLocaleFile = `../../client/assets/locales/translation-files/${defaultLocale}.json`;
  const merchantConfig = sortBy(pick(localesConfig, locales), 'displayName');

  return {
    strategy: 'prefix',
    seo: false,
    parsePages: false,
    lazy: true,
    langDir: 'assets/locales/assemble-translations/',
    locales: Object.values(merchantConfig),
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
