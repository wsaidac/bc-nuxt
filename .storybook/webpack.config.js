
const path = require('path');
const rootPath = path.resolve(__dirname, '..')
const clientPath = path.resolve(__dirname, '../client')

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.(png|jpe?g|gif)(\?.*)?$/,
      loader: 'url-loader',
    },
  )


  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: [

        'vue-style-loader',
        'css-loader',
        // 'style-loader',
        {
          loader: 'sass-loader',
          options: {
            data: `
              @import "~/assets/stylesheets/application.scss";
              @import "~/assets/stylesheets/_shared.scss";
              @import "~/assets/stylesheets/_locales.scss";
              @import "~/assets/stylesheets/shared/_colors.scss";
            `
          }
        },
        // Loader for webpack to process CSS with PostCSS
        {
          loader: 'postcss-loader',
          options: {
            /*
              Enable Source Maps
             */
            sourceMap: true,
            /*
              Set postcss.config.js config path && ctx
             */
            config: {
              path: './.storybook/postcss.config.js',
            },
          },
        },
      ],
      include: clientPath//path.resolve(__dirname, '../'),
    });

  // was necessary create another rule just for css files imported in config file
  config.module.rules.push({

    test: /\.css$/,
    loaders: [
      {
        loader: 'postcss-loader',
        options: {
          /*
            Enable Source Maps
           */
          sourceMap: true,
          /*
            Set postcss.config.js config path && ctx
           */
          config: {
            path: './.storybook/postcss.config.js',
          },
        },
      },
    ]
  })

  // for info addon
  config.module.rules.push({
    resourceQuery: /blockType=docs/,
    use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
  });

  // for info addon
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  });

  // necessary for load icons in storybook
  config.module.rules.push({
    test: /iconsWeb\.js$/,
    use: ['vue-style-loader', 'css-loader', 'webfonts-loader'],
  });

  // for load story jsx source
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  // config.plugins.push(new VueLoaderPlugin())

  config.resolve.alias['@'] = clientPath
  config.resolve.alias['~'] = clientPath
  config.resolve.alias['~~'] = rootPath



  // Return the altered config
  return config;
};
