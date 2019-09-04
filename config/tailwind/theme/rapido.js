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

const theme = {
  name: 'rapido',
  colors: {
    ...baseColors,
    ...colorCustomDefinitions,
  },
};

module.exports = createCustomTheme(theme);
