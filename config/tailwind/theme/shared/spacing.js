module.exports = {
  spacing: {
    'px': '1px',
    '2px': '2px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '18': '4.5rem',
    '28': '7rem',
    '40': '10rem',
    '48': '12rem',
    '54': '15rem',
  },
  inset: theme => theme('spacing'),
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  width: theme => ({
    'auto': 'auto',
    ...theme('spacing'),
    '40': '40rem',
    '1/2': '50%',
    '1/3': '33.33333%',
    '2/3': '66.66667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.66667%',
    '2/6': '33.33333%',
    '3/6': '50%',
    '4/6': '66.66667%',
    '5/6': '83.33333%',
    '1/12': '8.33333%',
    '2/12': '16.66667%',
    '3/12': '25%',
    '4/12': '33.33333%',
    '5/12': '41.66667%',
    '6/12': '50%',
    '7/12': '58.33333%',
    '8/12': '66.66667%',
    '9/12': '75%',
    '10/12': '83.33333%',
    '11/12': '91.66667%',
    'full': '100%',
    'screen': '100vw',
  }),
  height: theme => ({
    'auto': 'auto',
    ...theme('spacing'),
    'banner-sm': '19rem',
    'banner': '20rem',
    'banner-lg': '398px',
    'full': '100%',
    'screen': '100vh',
  }),
  minWidth: {
    0: '0',
    full: '100%',
  },
  minHeight: {
    0: '0',
    full: '100%',
    screen: '100vh',
  },
  maxHeight: {
    full: '100%',
    screen: '100vh',
  },
  padding: theme => theme('spacing'),
  margin: (theme, { negative }) => ({
    auto: 'auto',
    ...theme('spacing'),
    ...negative(theme('spacing')),
  }),
};
