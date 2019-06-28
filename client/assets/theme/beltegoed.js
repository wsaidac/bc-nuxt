const shared = require('./shared');

const theme = {
  ...shared,
  colors: {
    ...shared.colors,
    primary: {
      default: 'aquamarine',
    },
  },
};

module.exports = theme;
