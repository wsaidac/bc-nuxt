/**
  recursive method for flat a object adding '-' as separator
  example:
  const colors = {
    red: {
      light,
      dark
    }
  result ->
  colors = {
    red-light,
    red-dark
  }
  */
const flattenObject = (obj, prefix = '') => {
  if (!obj) return {};
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}-` : '';
    if (typeof obj[k] === 'object') {
      Object.assign(acc, flattenObject(obj[k], pre + k));
    }
    acc[pre + k] = obj[k];
    return acc;
  }, {});
};

/** it replace the '-default' to key sting */
const formattedKey = key => key.replace(/-default/g, '');

/**
 * Factory method for tailwind variants
 * @param {String} variantLabel
 */
const createVariant = variantLabel => ({ addVariant, e }) => {
  addVariant(variantLabel, ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => `.${e(`${variantLabel}${separator}${className}`)}:${variantLabel}`);
  });
};


module.exports = {
  flattenObject,
  formattedKey,
  createVariant,
};
