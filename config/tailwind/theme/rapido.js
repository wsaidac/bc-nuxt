const createCustomTheme = require('./theme-factory');

const baseColors = {
  secondary: {
    default: '#1db99b',
    light: '#1fd2af',
  },
  tertiary: {
    default: '#336bff',
    dark: '#2958d5',
  },
};

const colorCustomDefinitions = {
  'cta': baseColors.tertiary.default,
  'cta-hover': baseColors.tertiary.dark,
  'link': baseColors.secondary.default,
  'accent': baseColors.secondary.light,
  'success': baseColors.tertiary.default,
  'highlight': baseColors.secondary.default,
};

const baseColors = {
  primary: '#173962',
  secondary: {
    default: '#438FDF',
    light: '#7FBAF9',
    lighter: '#C6E2FF',
  },
  tertiary: {
    default: '#1FD2AF',
    dark: '#1db99b',
  },
  positive: '#70D7A6',
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
  transparent: 'transparent',
};

const colorCustomDefinitions = {
  'cta': baseColors.tertiary.default,
  'cta-hover': baseColors.tertiary.dark,
  'link': baseColors.secondary.default,
  'accent': baseColors.secondary.light,
  'success': baseColors.tertiary.default,
  'highlight': baseColors.secondary.default,
};

const theme = {
  name: 'rapido',
  colors: {
    ...baseColors,
    ...colorCustomDefinitions,
  },
};

module.exports = createCustomTheme(theme);
