const shared = require('./shared');

const theme = {
  ...shared,
  colors: {
    ...shared.colors,
    primary: {
      default: '#1000e3',
    },
  },
};

module.exports = theme;
