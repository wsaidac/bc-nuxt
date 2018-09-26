import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  'en-US': {
    save: 'Save',
  },
};

const dateTimeFormats = {
  'en-US': {
    simple: {
      day: '2-digit', month: '2-digit', year: 'numeric',
    },
  },
};

const numberFormats = {
  'en-US': {
    USD: {
      style: 'currency', currency: 'USD',
    },
    EUR: {
      style: 'currency', currency: 'EUR',
    },
  },
};

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: 'en-US',
    fallbackLocale: 'en-US',
    messages,
    dateTimeFormats,
    numberFormats,
    silentTranslationWarn: true,
  });
};
