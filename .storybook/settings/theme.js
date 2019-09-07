const create = require('@storybook/theming').create;

module.exports = create({
  base: 'dark',

  colorPrimary: 'red',
  colorSecondary: 'red',

  // UI
  appBg: '#173962',
  appContentBg: '#505050',
  appBorderColor: 'rgba(255,255,255,.1)',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'black',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: '#2f2f2f',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Rapido',
  brandUrl: 'https://rapido.com',
  brandImage: 'https://www.rapido.com/rapidoweb/img/be7dc89.svg',
});
