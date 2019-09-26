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
  // console.log(localeDidNotChange);
  if (!process.server && localeDidNotChange) return null;

  const DEBUG_MODE = isDebugMode(app, query);
  const RESTRICTED_LOCALE = app.i18n.locales.find((locale) => locale.restricted); // always returns { code: 'en-us', name: 'United States' }
  const RESTRICTED_COUNTRY = get(RESTRICTED_LOCALE, 'name', ''); // format: DE;     always returns 'United States'
  const USER_COUNTRY = get(req, 'headers["cloudfront-viewer-country"]', ''); // format: US
  const COUNTRY_RESTRICTED = 'country-restricted';
  const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;
  const urlPaths = route.path.split('/');
  const currentLocale = urlPaths[1];

  console.log('support');
  // console.log(isUserCountrySupported(app, USER_COUNTRY));
  // console.log(app.i18n.locales);
  console.log(USER_COUNTRY);

  if (!currentLocale && USER_COUNTRY !== RESTRICTED_COUNTRY && !isUserCountrySupported(app, USER_COUNTRY)) {
    console.log('detour 1');
    if (DEBUG_MODE) {
      console.log('detour 1.1');
      return redirect(301, `/${app.i18n.defaultLocale}/`); // DONE
    }
    // console.log('redirecting');
    console.log('detour 1.2');
    return redirect(301, COUNTRY_RESTRICTED_PATH); // DONE
  }

  const LOCALE_COOKIE = app.$cookies.get('country');
  console.log(LOCALE_COOKIE);

  console.log('detour 2.1');
  if (!currentLocale && isUserCountrySupported(app, USER_COUNTRY)) {
    console.log('detour 2.2');
    const supportedLocale = app.i18n.locales.find((locale) => locale.name === USER_COUNTRY).code;

    if (LOCALE_COOKIE) {
      console.log('detour 2.3');
      return redirect(301, `/${LOCALE_COOKIE}`);
    }

    console.log('detour 2.4'); // <=== no-route.path && CF-header
    setCountryCookie(app, supportedLocale);
    return redirect(301, `/${supportedLocale}`);
  }

  const PATH_COUNTRY = currentLocale.split('-')[1] ? currentLocale.split('-')[1].toUpperCase() : null;
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
