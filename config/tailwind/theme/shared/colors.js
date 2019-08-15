
const gradients = {
  linear: {
    'shadow-top': 'rgba(0, 0, 0, 0.5) 0%, rgba(9, 9, 121, 0) 20%',
  },
};
const textColor = theme => theme('colors');
const backgroundColor = theme => theme('colors');

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
