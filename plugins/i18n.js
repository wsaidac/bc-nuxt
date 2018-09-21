import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/en';

Vue.use(VueI18n);
locale.use(lang);

const messages = {
  'en-GB': {},
  'nl-NL': {},
};

const dateTimeFormats = {
  'en-GB': {
    default: { year: 'numeric', month: 'long', day: '2-digit' },
  },
  'nl-NL': {
    default: { year: 'numeric', month: 'long', day: '2-digit' },
  },
};

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.getters.locale,
    fallbackLocale: 'en-GB',
    silentTranslationWarn: true,
    dateTimeFormats,
    messages,
  });
};
