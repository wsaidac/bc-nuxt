const defaultLongDateTime = {
  year: 'numeric',
  month: 'long',
  day: '2-digit',
  minute: 'numeric',
  hour: 'numeric',
};

const defaultShortDateTime = {
  year: '2-digit',
  month: '2-digit',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

// function mergeLong(specificDateTime) {
//   return Object.assign({}, defaultLongDateTime, specificDateTime);
// }

function mergeShort(specificDateTime) {
  return Object.assign({}, defaultShortDateTime, specificDateTime);
}

function getDateTimeFormats(locale) {
  switch (locale) {
    case 'de-at':
      return {
        long: defaultLongDateTime,
        short: mergeShort({
          day: '2-digit',
        }),
      };

    default:
      return {
        long: defaultLongDateTime,
        short: defaultShortDateTime,
      };
  }
}

// see for options http://www.ecma-international.org/ecma-402/2.0/#sec-intl-datetimeformat-constructor

function getCurrency(code) {
  return {
    currency: {
      style: 'currency',
      currency: code || 'EUR',
    },
  };
}

module.exports = {
  'da-dk': {
    code: 'da-dk',
    iso: 'da-DK',
    file: 'da-dk.js',
    name: 'DK',
    displayName: 'Danmark',
    selectable: true,
    numberFormats: getCurrency('DKK'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'de-at': {
    code: 'de-at',
    iso: 'de-AT',
    file: 'de-at.js',
    name: 'AT',
    displayName: 'Österreich',
    selectable: true,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats('de-at'),
  },
  'en-us': {
    code: 'en-us',
    iso: 'en-US',
    file: 'en-us.js',
    name: 'US',
    displayName: 'United States',
    selectable: true,
    numberFormats: getCurrency('USD'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'fr-be': {
    code: 'fr-be',
    iso: 'fr-BE',
    file: 'fr-be.js',
    name: 'BE',
    displayName: 'Belgique',
    selectable: true,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'pl-pl': {
    code: 'pl-pl',
    iso: 'pl-PL',
    file: 'pl-pl.js',
    name: 'PL',
    displayName: 'Polska',
    selectable: true,
    numberFormats: getCurrency('PLN'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'en-uk': {
    code: 'en-uk',
    iso: 'en-UK',
    file: 'en-us.js',
    name: 'UK',
    displayName: 'United Kingdom',
    selectable: false,
    numberFormats: getCurrency('GBP'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'it-it': {
    code: 'it-it',
    iso: 'it-IT',
    file: 'it-it.js',
    name: 'IT',
    displayName: 'Italia',
    selectable: true,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'fi-fi': {
    code: 'fi-fi',
    iso: 'fi-FI',
    file: 'fi-fi.js',
    name: 'FI',
    displayName: 'Suomi',
    selectable: true,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'es-es': {
    code: 'es-es',
    iso: 'es-ES',
    file: 'es-es.js',
    name: 'ES',
    displayName: 'España',
    selectable: true,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'pt-pt': {
    code: 'pt-pt',
    iso: 'pt-PT',
    file: 'pt-pt.js',
    name: 'PT',
    displayName: 'Portugal',
    selectable: false,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'sk-sk': {
    code: 'sk-sk',
    iso: 'sk-SK',
    file: 'sk-sk.js',
    name: 'SK',
    displayName: 'Slovensko',
    selectable: false,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
  'en-ie': {
    code: 'en-ie',
    iso: 'en-IE',
    file: 'en-us.js',
    name: 'IE',
    displayName: 'Ireland',
    selectable: true,
    numberFormats: getCurrency('EUR'),
    dateTimeFormats: getDateTimeFormats(),
  },
};
