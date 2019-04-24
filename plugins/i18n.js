export default function ({ app, error }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_, newLocale) => {
    app.store.commit('async/setContextChange', true);
    app.store.dispatch('context/changeContext', { app, error, locale: newLocale });

    // BlueConic Variables
    const { hostname } = window.location;
    // var locale = window.location.pathname.split('/')[1];
    bcChannelIdentifier = newLocale + '.' + hostname; /* eslint-disable-line */
  };
}
