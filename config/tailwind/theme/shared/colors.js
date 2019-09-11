
const gradients = {
  linear: {
    'shadow-top': 'rgba(0, 0, 0, 0.5) 0%, rgba(9, 9, 121, 0) 20%',
    'bright-shadow-bottom': 'rgba(255,255,255,0.00) 0%, rgba(255,248,234,0.90) 78%',
  },
};
const textColor = (theme) => theme('colors');
const backgroundColor = (theme) => ({
  ...theme('colors'),
  overlay: 'rgba(0, 0, 0, 0.6)',
});

const borderColor = (theme) => ({
  ...theme('colors'),
  default: theme('colors.gray.300', 'currentColor'),
});

const colors = {
  primary: '#173962',
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


/**
 * Fallback colors
 * these properties will be redefined for each label
 */
const fallbackBaseColors = {
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

const fallBackColorCustomDefinitions = {
  'cta': fallbackBaseColors.tertiary.default,
  'cta-hover': fallbackBaseColors.tertiary.dark,
  'link': fallbackBaseColors.secondary.default,
  'accent': fallbackBaseColors.secondary.light,
  'success': fallbackBaseColors.tertiary.default,
  'highlight': fallbackBaseColors.secondary.default,
};


module.exports = {
  colors: {
    ...fallbackBaseColors,
    ...fallBackColorCustomDefinitions,
    ...colors,
  },
  textColor,
  backgroundColor,
  borderColor,
  gradients,
};
