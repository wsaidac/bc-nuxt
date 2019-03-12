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

function mergeLong(specificDateTime) {
  return Object.assign({}, defaultLongDateTime, specificDateTime);
}

function mergeShort(specificDateTime) {
  return Object.assign({}, defaultShortDateTime, specificDateTime);
}

module.exports = {
  'da-dk': {
    long: defaultLongDateTime,
    short: defaultShortDateTime,
  },
  'de-at': {
    long: defaultLongDateTime,
    short: mergeShort({
      day: '2-digit',
    }),
  },
  'en-us': {
    long: defaultLongDateTime,
    short: defaultShortDateTime,
  },
  'fr-be': {
    long: defaultLongDateTime,
    short: defaultShortDateTime,
  },
  'pl-pl': {
    long: defaultLongDateTime,
    short: defaultShortDateTime,
  },
};

// see for options http://www.ecma-international.org/ecma-402/2.0/#sec-intl-datetimeformat-constructor
