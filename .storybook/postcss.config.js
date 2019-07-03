
const tailwindcss = require('tailwindcss');


module.exports = {
  plugins: [
    /*
      PostCSS plugin to unwrap nested rules like how Sass does it.
     */
    require('postcss-nested'),

    /*
      PostCSS Preset Env lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.

      For more options read: https://github.com/csstools/postcss-preset-env#options
     */
    require('postcss-preset-env')({
      stage: 0,
    }),
    /*
      Tailwind configuration
    */
    tailwindcss('./tailwind.config.js'),

    /*
      PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.

      Write your CSS rules without vendor prefixes (in fact, forget about them entirely). Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you.
     */
    require('autoprefixer'),
  ],
};
