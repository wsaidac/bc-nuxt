const _ = require('lodash');
const {
  flattenObject,
  formattedKey,
} = require('./utils');

/**
 * plugin uses to build `border-top-color` classes based on `theme.colors`
 * example:
 * theme.colors: {
 *  red: 'red'
 * }
 * result:
 * .border-t-red {
 *    border-top-color: red;
 * }
 */
const extendBordersPlugin = ({
  addUtilities,
  config = {},
  e,
}) => {
  const colors = config('theme.colors');
  const flattenColors = flattenObject(colors);

  const borderTopUtilities = _.map(flattenColors, (value, key) => ({
    [`.${e(`border-t-${formattedKey(key)}`)}`]: {
      'border-top-color': `${value};`,
    },
  }));

  addUtilities(borderTopUtilities);
};


/**
 *  plugin uses to build `rotate` transform classes based on `theme.rotate`
 * example:
 * theme.rotate = { 180: '180deg' }
 * result:
 * .rotate-180 {
 *  transform: rotate(180deg)
 * }
 * .-rotate-180 {
 *  transform: rotate(-180deg)
 * }
 */
const rotateTransformPlugin = ({
  addUtilities,
  config,
  e,
}) => {
  const rotateUtilities = _.reduce(config('theme.rotate'), (result, value, key) => [
    ...result,
    {
      [`.${e(`rotate-${key}`)}`]: {
        transform: `rotate(${value})`,
      },
    },
    {
      [`.${e(`-rotate-${key}`)}`]: {
        transform: `rotate(${-value})`,
      },
    },
  ], []);

  addUtilities(rotateUtilities, ['responsive', 'hover']);
};


const gradientBackgroundPlugin = ({
  addUtilities,
  config,
  e,
}) => {
  const gradientUtilities = _.map(config('theme.gradients.linear'), (value, key) => ({
    [`.${e(`bg-gradient-${key}`)}`]: {
      background: `linear-gradient(${value})`,
    },
  }));

  addUtilities(gradientUtilities);
};


/**
 *  plugin uses to build `truncate-key-lines` classes based on `ellipsis`
 * example:
 * theme.ellipsis.lines = { 3: '3' }
 * result:
 * .truncate-3-lines {
 *    'overflow': 'hidden',
 *    'display': '-webkit-box',
 *    '-webkit-line-clamp': 3,
 *    '-webkit-box-orient': 'vertical',
 * }
 */
const ellipsisPlugin = ({ addUtilities, config, e }) => {
  const ellipsisUtilities = _.map(config('theme.ellipsis.lines'), (value, key) => ({
    [`.${e(`truncate-${key}-lines`)}`]: {
      'overflow': 'hidden',
      'display': '-webkit-box',
      '-webkit-line-clamp': value,
      '-webkit-box-orient': 'vertical',
    },
  }));

  addUtilities(ellipsisUtilities, ['responsive']);
};

module.exports = {
  extendBordersPlugin,
  rotateTransformPlugin,
  gradientBackgroundPlugin,
  ellipsisPlugin,
};
