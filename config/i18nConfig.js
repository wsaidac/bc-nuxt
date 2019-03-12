/* eslint-disable */
const lodash = require('lodash');
const merchants = require('./i18n/merchants');
const allLocales = require('./i18n/locales.js');

const localeFormats = {
  dateTimeFormats: require('./i18n/dateTime.js'),
  numberFormats: require('./i18n/numberFormats.js'),
};

const merchantLocales = (label) => merchants[label].locales
const labelLocales = (label) => merchantLocales(label).map(locale => allLocales[locale]);
const formatOflabelAndType = (label, dataType) => lodash.pick(localeFormats[dataType], merchantLocales(label));

module.exports = function (label) {
  return {
    strategy: 'prefix',
    seo: false,
    parsePages: false,
    lazy: true,
    langDir: './assets/locales/translation-files/',
    locales: labelLocales(label),
    defaultLocale: merchants[label].default,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: merchants[label].default,
      silentTranslationWarn: true,
      dateTimeFormats: formatOflabelAndType(label, 'dateTimeFormats'),
      numberFormats: formatOflabelAndType(label, 'numberFormats'),
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'country',
      alwaysRedirect: false,
      fallbackLocale: null,
    },
  };
};
