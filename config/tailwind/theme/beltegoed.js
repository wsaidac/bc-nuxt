
const createCustomTheme = require('./theme-factory');

const baseColors = {
  secondary: {
    default: '#438FDF',
    light: '#7FBAF9',
    lighter: '#C6E2FF',
  },
  tertiary: {
    default: '#1FD2AF',
    dark: '#1db99b',
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
  name: 'Beltegoed',
  colors: {
    ...baseColors,
    ...colorCustomDefinitions,
  },
};

module.exports = createCustomTheme(theme);
