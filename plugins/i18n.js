import Cookies from 'universal-cookie';

export default function ({ app, error }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_, newLocale) => {
    const cookies = new Cookies();
    cookies.set('country', newLocale, { path: '/' });

    app.store.commit("async/setContextChange", true);
    app.store.dispatch("context/changeContext", { app, error, locale: newLocale });
  };
}
