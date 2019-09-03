const beltegoedTrustpilot = {
  templateId: '53aa8912dec7e10d38f59f36',
  businessunitId: '4de14b4700006400050fc804',
  reviewUrl: 'https://nl.trustpilot.com/review/beltegoed.nl',
  locale: 'nl-NL',
};

const config = {
  beltegoed: {
    paths: {
      logo: 'beltegoed.svg',
    },
    domain: 'https://beltegoed.nl/',
    trustpilot: beltegoedTrustpilot,
  },
  default: {
    paths: {
      logo: 'beltegoed.svg',
    },
    domain: 'https://beltegoed.nl/',
    trustpilot: beltegoedTrustpilot,
  },
};

const label = process.env.LABEL || 'beltegoed';

const labelConfig = config[label] || config.default;

module.exports = labelConfig;
