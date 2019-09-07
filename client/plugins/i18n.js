import Vue from 'vue';
import localeConfig from 'element-ui/lib/locale';

async function setElementUiLocale(locale) {
  const lang = locale.split('-')[0];
  const langFile = await import(`element-ui/lib/locale/lang/${lang}`);
  localeConfig.use(langFile.default);
}

export default function ({ app, error }) {
  if (process.env.PHRASEAPP_EDITOR) {
    app.i18n.t = key => `{{__phrase_${key}__}}`;
    Vue.prototype.$t = key => `{{__phrase_${key}__}}`;
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_, newLocale) => {
    app.store.commit('async/setContextChange', true);
    app.store.dispatch('context/changeContext', { app, error });

    setElementUiLocale(newLocale);

    if (window.bcChannelIdentifier) {
      // Declare BlueConic Variables
      const { hostname } = window.location;
      window.bcChannelIdentifier = newLocale + '.' + hostname; /* eslint-disable-line */
      // Send pageview event to Blueconic
      const bcEvent = new Event('pageReadyEvent');
      window.dispatchEvent(bcEvent);
    }
  };
}
