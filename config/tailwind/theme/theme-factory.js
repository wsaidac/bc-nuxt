const shared = require('./shared');

const REQUIRED_COLOR_KEYS = ['secondary', 'tertiary', 'cta', 'cta-hover', 'link', 'accent', 'success', 'highlight'];

function createCustomTheme({ name, colors }) {
  const colorKeys = Object.keys(colors);
  const requiredColorIsMissing = REQUIRED_COLOR_KEYS.some((color) => {
    if (!colorKeys.includes(color)) {
      console.warn(`color key missing: ${color} in custom theme for the label ${name}`);
      return true;
    }
    return false;
  });

  if (requiredColorIsMissing) throw Error(`Required color is missing for the label ${name}`);

  return {
    ...shared,
    colors: {
      ...shared.colors,
      ...colors,
    },
  };
}

module.exports = createCustomTheme;
