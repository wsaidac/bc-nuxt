const _ = require('lodash');
const { flattenObject, formattedKey } = require('./utils');

const extendBordersPlugin = ({ addUtilities, config = {}, e }) => {
  const colors = config('theme.colors');
  const flattenColors = flattenObject(colors);

  const borderTopUtilities = _.map(flattenColors, (value, key) => ({
    [`.${e(`border-t-${formattedKey(key)}`)}`]: {
      'border-top-color': `${value};`,
    },
  }));

  addUtilities(borderTopUtilities);
};


module.exports = {
  extendBordersPlugin,
};
