import locales from '~/config/i18n/locales';

export default ({
  app, req, redirect, route,
}) => {
  if (!process.server && route.path.substring(1).startsWith(app.i18n.locale)) return null;

  const urlPaths = route.path.split('/');
  const currentLocale = urlPaths[1];

  // if there is no locale slug in the url, redirect to default locale
  if (!currentLocale) {
    const countryCookie = app.$cookies.get('country');
    if (countryCookie) {
      return redirect(301, `/${countryCookie}/`);
    }

    const cloudfrontViewerCountry = req.headers['cloudfront-viewer-country'];
    if (cloudfrontViewerCountry) {
      const cloudfrontLocale = Object.values(locales)
        .find(locale => locale.name.toLowerCase() === cloudfrontViewerCountry.toLowerCase());
      const localeCode = cloudfrontLocale && cloudfrontLocale.code;

      if (localeCode) {
        app.$cookies.set('country', localeCode, { path: '/' });
        return redirect(301, `/${localeCode}/`);
      }
    }

    return redirect(301, `/${app.i18n.defaultLocale}/`);
  }

  // if the locale has uppercase letters, redirect to lowercase locale
  // ex /en-US/ will redirect to /en-us/ for SEO purposes
  if (currentLocale !== currentLocale.toLowerCase()) {
    urlPaths.splice(1, 1, currentLocale.toLowerCase());

    return redirect(301, urlPaths.join('/'));
  }

  return null;
};
