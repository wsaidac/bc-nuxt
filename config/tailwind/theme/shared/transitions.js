module.exports = {
  transitionProperty: {
    all: 'all',
    transform: 'transform',
  },
  transitionDuration: {
    200: '200ms',
    300: '300ms',
    500: '500ms',
  },
  transitionTimingFunction: {
    'default': 'ease-in-out',
    'linear': 'linear',
    'ease': 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
  },
  transitionDelay: { // defaults to these values
    default: '0ms',
    0: '0ms',
    100: '100ms',
    250: '250ms',
  },
};
