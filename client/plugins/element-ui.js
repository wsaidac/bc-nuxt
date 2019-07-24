import Element from 'element-ui';
import Vue from 'vue';
import localeConfig from 'element-ui/lib/locale';

async function setElementUiLocale(locale) {
  const lang = locale.split('-')[0];
  const langFile = await import(`element-ui/lib/locale/lang/${lang}`);
  localeConfig.use(langFile.default);
}

export default ({ app }) => {
  Vue.use(Element);
  setElementUiLocale(app.i18n.locale);
};
