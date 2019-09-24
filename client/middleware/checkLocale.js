import { get } from 'lodash';

const setCountryCookie = (app, countryCode) => {
  app.$cookies.set('country', countryCode, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
};

const isLocaleSupported = (app, curentLocale) => {
  const { locales } = app.i18n;

  return Boolean(locales.find((locale) => locale.code.toLowerCase() === curentLocale.toLowerCase()));
};

const isUserCountrySupported = (app, userCountry) => {
  const { locales } = app.i18n;
  console.log('locales', locales);
  return locales.find((locale) => locale.name.toLowerCase() === userCountry.toLowerCase());
};

const isUserOnRestrictedCountry = (pathCountry, userCountry, restrictedCountry) => userCountry !== restrictedCountry && pathCountry === restrictedCountry;

const isDebugMode = (app, query = {}) => {
  const debugCookie = app.$cookies.get('debug_mode');

  if (debugCookie) return true;
  if (query.marketeer) {
    app.$cookies.set('debug_mode', query.marketeer, { path: '/' });
    return true;
  }

  return false;
};

export default (context = {}) => {
  console.log('checkLocale called ===================================');
  const {
    app,
    redirect,
    route,
    req,
    query,
  } = context;

  const localeDidNotChange = route.path.substring(1).startsWith(app.i18n.locale);
  console.log(localeDidNotChange);
  if (!process.server && localeDidNotChange) return null;
  console.log('going past the first check');
  const DEBUG_MODE = isDebugMode(app, query);
  console.log(DEBUG_MODE);
  console.log('locales');
  console.log(app.i18n.locales);
  const RESTRICTED_LOCALE = app.i18n.locales.find((locale) => locale.restricted);
  const RESTRICTED_COUNTRY = get(RESTRICTED_LOCALE, 'name', ''); // format: DE;
  const USER_COUNTRY = get(req, 'headers["cloudfront-viewer-country"]', ''); // format: US
  const COUNTRY_RESTRICTED = 'country-restricted';
  const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;
  const LOCALE_COOKIE = app.$cookies.get('country');

  console.log('paths');
  console.log(route.path);
  const urlPaths = route.path.split('/');
  console.log(urlPaths);
  const currentLocale = urlPaths[1];
  const PATH_COUNTRY = currentLocale.split('-')[1] ? currentLocale.split('-')[1].toUpperCase() : null;

  if (!currentLocale && USER_COUNTRY !== RESTRICTED_COUNTRY && !isUserCountrySupported(app, USER_COUNTRY)) {
    if (DEBUG_MODE) {
      return redirect(301, `/${app.i18n.defaultLocale}/`);
    }
    return redirect(301, COUNTRY_RESTRICTED_PATH);
  }

  if (!currentLocale && isUserCountrySupported(app, USER_COUNTRY)) {
    const supportedLocale = app.i18n.locales.find((locale) => locale.name === USER_COUNTRY).code;

    if (LOCALE_COOKIE) {
      return redirect(301, `/${LOCALE_COOKIE}`);
    }

    setCountryCookie(app, supportedLocale);
    return redirect(301, `/${supportedLocale}`);
  }

  if (!DEBUG_MODE && isUserOnRestrictedCountry(PATH_COUNTRY, USER_COUNTRY, RESTRICTED_COUNTRY)) {
    return redirect(301, COUNTRY_RESTRICTED_PATH);
  }

  if (isLocaleSupported(app, currentLocale)) {
    // if the locale has uppercase letters, redirect to lowercase locale
    // ex /en-US/ will redirect to /en-us/ for SEO purposes
    if (currentLocale !== currentLocale.toLowerCase()) {
      urlPaths.splice(1, 1, currentLocale.toLowerCase());
      const lowercaseLocale = urlPaths.join('/');
      setCountryCookie(app, lowercaseLocale);

      return redirect(301, lowercaseLocale);
    }

    setCountryCookie(app, currentLocale);
    return null;
  }

  return null;
};
