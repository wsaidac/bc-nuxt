export default function ({ app, error }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_, newLocale) => {
    app.store.commit('async/setContextChange', true);
    app.store.dispatch('context/changeContext', { app, error });

    // Declare BlueConic Variables
    const { hostname } = window.location;
    bcChannelIdentifier = newLocale + '.' + hostname; /* eslint-disable-line */
    // Send pageview event to Blueconic
    const bcEvent = new Event('pageReadyEvent');
    window.dispatchEvent(bcEvent);
  };
}
