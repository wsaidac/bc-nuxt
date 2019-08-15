const boxing = require('./boxing');
const typography = require('./typography');
const colors = require('./colors');
const spacing = require('./spacing');
const transforms = require('./transforms');
const transitions = require('./transitions');

module.exports = {
  ...colors,
  ...boxing,
  ...typography,
  ...spacing,
  ...transforms,
  ...transitions,
};
