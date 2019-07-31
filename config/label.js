const config = {
  beltegoed: {
    paths: {
      logo: 'beltegoed.svg',
    },
    domain: 'https://beltegoed.nl/',
  },
  default: {
    paths: {
      logo: 'beltegoed.svg',
    },
    domain: 'https://beltegoed.nl/',
  },
};

const label = process.env.LABEL || 'beltegoed';

const labelConfig = config[label] || config.default;

module.exports = labelConfig;
