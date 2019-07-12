const colors = {
  primary: {
    default: '#1000e3',
  },
  tertiary: {
    dark: '#0C1428',
    default: '#0C1428',
    light: '#0C1428',
  },
  warning: {
    dark: '#FFC200',
    default: '#FFCE33',
    light: 'FFF3CC',
  },
  danger: {
    dark: '#E84A49',
    default: '#ED6E6D',
    light: '#FADBDB',
  },
  select: {
    dark: '#3333CB',
    default: '#0473E6',
    light: '#D6D6F5',
  },
  info: {
    dark: '#53b5f9',
    default: '#75C4FA',
    light: '#DDF0FE',
  },
  text: {
    dark: '#3D4353',
    default: '#3D4353',
    light: '#3D4353',
  },
  gray: {
    dark: '#8F9997',
    default: '#B6BAB9',
    light: '#F0F1F5',
  },
  black: '#000',
  white: '#FFF',
  transparent: 'transparent',
};
const textColor = theme => theme('colors');
const backgroundColor = theme => theme('colors');

const borderColor = theme => ({
  ...theme('colors'),
  default: theme('colors.gray.300', 'currentColor'),
});


module.exports = {
  colors,
  textColor,
  backgroundColor,
  borderColor,
};
