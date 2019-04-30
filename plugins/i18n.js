export default function ({ app, error }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_, newLocale) => {
    // BlueConic Variables
    const { hostname } = window.location;
    bcChannelIdentifier = newLocale + '.' + hostname; /* eslint-disable-line */

    app.$cookies.set('country', newLocale, { path: '/' });

    app.store.commit('async/setContextChange', true);
    app.store.dispatch('context/changeContext', { app, error, locale: newLocale });
  };
}
