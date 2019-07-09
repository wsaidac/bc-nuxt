const shared = require('./shared');

const colors = {
  primary: '#173962',
  secondary: {
    default: '#438FDF',
    light: '#7FBAF9',
    lighter: '#C6E2FF',
  },
  tertiary: '#1FD2AF',
  success: '#70D7A6',
  warning: '#FFE47E',
  gray: {
    black: '#838383',
    dark: '#BEBEBE',
    default: '#E8E8E8',
    light: '#F3F3F3',
  },
  error: {
    default: '#FF6158',
    light: '#FFDADA',
  },
  black: '#1F1F1E',
  white: '#FFFFFF',
};
const theme = {
  ...shared,
  colors: {

    ...colors,
  },
};

module.exports = theme;
