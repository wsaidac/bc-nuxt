const lodash = require('lodash');
const merchantsConfig = require('./i18n/merchantsConfig');
const localesConfig = require('./i18n/localesConfig');

module.exports = function (label) {
  const { locales, defaultLocale } = merchantsConfig[label];
  const defaultLocaleFile = `../assets/locales/translation-files/${defaultLocale}.json`;
  const merchantConfig = lodash.pick(localesConfig, locales);

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
