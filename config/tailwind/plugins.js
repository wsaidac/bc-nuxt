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

  addUtilities(rotateUtilities);
};


module.exports = {
  extendBordersPlugin,
  rotateTransformPlugin,
};
