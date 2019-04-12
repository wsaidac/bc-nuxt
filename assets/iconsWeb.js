module.exports = {
  classPrefix: 'ui-icon-',
  baseSelector: '.ui-icon',
  embed: true,
  files: ['./images/icons/*.svg'],
  fixedWidth: true,
  fontName: 'UiIcons',
  types: ['woff2'],
  formatOptions: {
    ttf: {
      ts: 1451512800000, // hardcoded timestamp to make sure files in .nuxt/dist/client in order to make sure all built filenames are identical when no changes are applied.
    },
  },
};
