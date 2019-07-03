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

function getCurrency(currency) {
  return {
    currency: {
      style: 'currency',
      currency: currency || 'EUR',
    },
  };
}

function generateLocaleConfig(locale, name, currency, status) {
  const lang = locale.split('-')[0];
  const country = locale.split('-')[1].toUpperCase();

  // if the language is english use the 'en-us' translation file
  const file = lang === 'en' ? 'en-us' : locale;

  const config = {
    code: locale,
    iso: `${lang}-${country}`,
    file: `${file}.js`,
    name: country,
    displayName: name,
    selectable: status === 'active' || false,
    ...getCurrency(currency),
    ...getDateTimeFormats(locale),
  };

  return config;
}

module.exports = {
  'da-dk': generateLocaleConfig('da-dk', 'Danmark', 'DKK', 'active'),
  'de-at': generateLocaleConfig('de-at', 'Österreich', 'EUR', 'active'),
  'en-us': generateLocaleConfig('en-us', 'United States', 'USD', 'active'),
  'fr-be': generateLocaleConfig('fr-be', 'Belgique', 'EUR', 'active'),
  'pl-pl': generateLocaleConfig('pl-pl', 'Polska', 'PLN', 'active'),
  'it-it': generateLocaleConfig('it-it', 'Italia', 'EUR', 'active'),
  'fi-fi': generateLocaleConfig('fi-fi', 'Suomi', 'EUR', 'active'),
  'es-es': generateLocaleConfig('es-es', 'España', 'EUR', 'active'),
  'en-ie': generateLocaleConfig('en-ie', 'Ireland', 'EUR', 'active'),
  'pt-pt': generateLocaleConfig('pt-pt', 'Portugal', 'EUR', 'inactive'),
  'en-uk': generateLocaleConfig('en-uk', 'United Kingdom', 'GBP', 'inactive'),
  'sk-sk': generateLocaleConfig('sk-sk', 'Slovensko', 'EUR', 'inactive'),
};
