import Cookies from 'universal-cookie';
import locales from '~/config/i18n/locales';

export default ({
  app, req, redirect, route, query,
}) => {
  if (!process.server && route.path.substring(1).startsWith(app.i18n.locale)) return null;

  const urlPaths = route.path.split('/');
  const currentLocale = urlPaths[1];
  const cookies = new Cookies(req.headers.cookie);

  if (query.aid) {
    cookies.set('aid', query.aid, { path: '/'});
  }

  // if there is no locale slug in the url, redirect to default locale
  if (!currentLocale) {
    const countryCookie = cookies.get('country');
    if (countryCookie) {
      return redirect(301, `/${countryCookie}/`);
    }

    const cloudfrontViewerCountry = req.headers['cloudfront-viewer-country'];
    if (cloudfrontViewerCountry) {
      const cloudfrontLocale = Object.values(locales).find(locale => locale.name.toLowerCase() === cloudfrontViewerCountry.toLowerCase());
      const localeCode = cloudfrontLocale && cloudfrontLocale.code;

      if (localeCode) {
        cookies.set('country', localeCode, { path: '/' });
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
