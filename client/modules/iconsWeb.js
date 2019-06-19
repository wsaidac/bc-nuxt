export default function IconsModule() {
  this.extendBuild((config) => {
    config.module.rules.push({
      test: /iconsWeb\.js$/,
      use: ['vue-style-loader', 'css-loader', 'webfonts-loader'],
    });
  });
}
