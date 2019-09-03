const EN_US_LOCALE = 'en-us';
const COUNTRY_RESTRICTED = 'country-restricted';
const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;


export default ({
  app,
  req,
  redirect,
  route,
}) => {
  // if the locale hasn't change
  if (!process.server && route.path.substring(1).startsWith(app.i18n.locale)) return null;

  const urlPaths = route.path.split('/');
  const currentLocale = urlPaths[1];


  if (currentLocale === COUNTRY_RESTRICTED) {
    return redirect('/country-restricted');
  }

  // if there is no locale slug in the url, redirect to default locale
  if (!currentLocale || currentLocale === EN_US_LOCALE) {
    const countryCookie = app.$cookies.get('country');
    if (countryCookie) {
      return redirect(301, `/${countryCookie}/`);
    }

    const cloudfrontViewerCountry = req ? req.headers['cloudfront-viewer-country'] : null;

    if (cloudfrontViewerCountry) {
      const cloudfrontLocale = app.i18n.locales
        .find(locale => locale.name.toLowerCase() === cloudfrontViewerCountry.toLowerCase());

      const localeCode = cloudfrontLocale && cloudfrontLocale.code;


      if (localeCode) {
        if (localeCode.toLowerCase() !== EN_US_LOCALE && currentLocale.toLowerCase() === EN_US_LOCALE) {
          return redirect(301, COUNTRY_RESTRICTED_PATH);
        }

        app.$cookies.set('country', localeCode, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        return redirect(301, `/${localeCode}/`);
      }
    }

    return redirect(301, COUNTRY_RESTRICTED_PATH);
  }

  // if the locale has uppercase letters, redirect to lowercase locale
  // ex /en-US/ will redirect to /en-us/ for SEO purposes
  if (currentLocale !== currentLocale.toLowerCase()) {
    urlPaths.splice(1, 1, currentLocale.toLowerCase());

    return redirect(301, urlPaths.join('/'));
  }

  if (currentLocale) {
    app.$cookies.set('country', currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  return null;
};
