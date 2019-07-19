const label = process.env.LABEL || 'beltegoed';

/* eslint-disable */
const theme = require(`./${label}`);

if (!theme) {
  throw new Error("`process.env.LABEL` doesn't match");
}

module.exports = theme
