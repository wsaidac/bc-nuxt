module.exports = function IconsModule() {
  this.extendBuild((config) => {
    config.module.rules.push({
      test: /icons\.js$/,
      use: ['vue-style-loader', 'css-loader', 'webfonts-loader'],
    });
  });
};
