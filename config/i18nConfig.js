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
const defaultLocale = (label) => merchants[label].default;
const defaultLocaleFile = (label) => `../assets/locales/translation-files/${label}.json`;

module.exports = function (label) {
  return {
    strategy: 'prefix',
    seo: false,
    parsePages: false,
    lazy: true,
    langDir: './assets/locales/assemble-translations/',
    locales: labelLocales(label),
    defaultLocale: defaultLocale(label),
    vueI18n: {
      fallbackLocale: defaultLocale(label),
      silentTranslationWarn: true,
      dateTimeFormats: formatOflabelAndType(label, 'dateTimeFormats'),
      numberFormats: formatOflabelAndType(label, 'numberFormats'),
      messages: {
        [defaultLocale(label)]: require(defaultLocaleFile(defaultLocale(label))),
      },
    },
  };
};
