export default function ({ app, error }) {
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (_, newLocale) => {
    app.store.dispatch("context/changeContext", { app, error, locale: newLocale });
  };
}
