
const gradients = {
  linear: {
    'shadow-top': 'rgba(0, 0, 0, 0.5) 0%, rgba(9, 9, 121, 0) 20%',
    'bright-shadow-bottom': 'rgba(255,255,255,0.00) 0%, rgba(255,248,234,0.90) 78%',
  },
};
const textColor = theme => theme('colors');
const backgroundColor = theme => ({
  ...theme('colors'),
  overlay: 'rgba(0, 0, 0, 0.6)',
});

const borderColor = theme => ({
  ...theme('colors'),
  default: theme('colors.gray.300', 'currentColor'),
});


module.exports = {
  textColor,
  backgroundColor,
  borderColor,
  gradients,
};
