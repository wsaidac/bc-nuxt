export default function I18nModule() {
  this.extendBuild((config) => {
    config.module.rules.find(
      rule => rule.loader === 'vue-loader',
    ).options.loaders.i18n = '@kazupon/vue-i18n-loader';
  });
}
