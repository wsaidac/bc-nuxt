const trustpilogSharedConfig = {
  businessunitId: '4de14b4700006400050fc804',
  reviewUrl: 'https://nl.trustpilot.com/review/beltegoed.nl',
  locale: 'nl-NL',
  reviewnumber: '5',
  theme: 'light',
};


const trustpilot = {
  widgets: {
    footer: {
      templateId: '53aa8912dec7e10d38f59f36',
      ...trustpilogSharedConfig,
    },
    categoryHeader: {
      templateId: '54d39695764ea907c0f34825',
      ...trustpilogSharedConfig,
    },
    reviewList: {
      templateId: '5717796816f630043868e2e8',
      ...trustpilogSharedConfig,
    },
  },
};

const config = {
  beltegoed: {
    paths: {
      logo: 'beltegoed.svg',
    },
    domain: 'https://beltegoed.nl/',
    trustpilot,
  },
  default: {
    paths: {
      logo: 'beltegoed.svg',
    },
    domain: 'https://beltegoed.nl/',
    trustpilot,
  },
};

const label = process.env.LABEL || 'beltegoed';

const labelConfig = config[label] || config.default;

module.exports = labelConfig;
