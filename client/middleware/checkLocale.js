import { get } from 'lodash';
import { cookieAge } from '~/constants';

const setCountryCookie = (app, countryCode) => {
  app.$cookies.set('country', countryCode, cookieAge);
};

const isLocaleSupported = (app, curentLocale) => {
  const { locales } = app.i18n;
  return Boolean(locales.find((locale) => locale.code.toLowerCase() === curentLocale.toLowerCase()));
};

const isUserCountrySupported = (app, userCountry) => {
  const { locales } = app.i18n;
  return locales.find((locale) => locale.name.toLowerCase() === userCountry.toLowerCase());
  // locale.name.toLowerCase: 'nl-BE' -> 'be'
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
  const {
    app,
    redirect,
    route,
    req,
    query,
  } = context;

  const localeDidNotChange = route.path.substring(1).startsWith(app.i18n.locale);
  if (!process.server && localeDidNotChange) return null;

  const DEBUG_MODE = isDebugMode(app, query);
  const RESTRICTED_LOCALE = app.i18n.locales.find((locale) => locale.restricted); // always returns { code: 'en-us', name: 'US', ... }
  const RESTRICTED_COUNTRY = get(RESTRICTED_LOCALE, 'name', ''); // format: US; always returns 'US'
  const USER_COUNTRY = get(req, 'headers["cloudfront-viewer-country"]', ''); // format: US
  const COUNTRY_RESTRICTED = 'country-restricted';
  const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;
  const urlPaths = route.path.split('/');
  const currentLocale = urlPaths[1]; // www.rapido.com/es-es/ => 'es-es'

  if (!currentLocale && USER_COUNTRY !== RESTRICTED_COUNTRY && !isUserCountrySupported(app, USER_COUNTRY)) {
    if (DEBUG_MODE) {
      return redirect(301, `/${app.i18n.defaultLocale}/`);
    }
    return redirect(301, COUNTRY_RESTRICTED_PATH);
  }

  const LOCALE_COOKIE = app.$cookies.get('country');
  if (!currentLocale && isUserCountrySupported(app, USER_COUNTRY)) {
    const supportedLocale = app.i18n.locales.find((locale) => locale.name === USER_COUNTRY).code;

    if (LOCALE_COOKIE) {
      return redirect(301, `/${LOCALE_COOKIE}`);
    }

    setCountryCookie(app, supportedLocale);
    return redirect(301, `/${supportedLocale}`);
  }

  const PATH_COUNTRY = currentLocale.split('-')[1] ? currentLocale.split('-')[1].toUpperCase() : null; // 'nl-be' ? => 'BE' : null
  // RESTRICTED_COUNTRY = 'US'
  // userCountry !== restrictedCountry &&  ===> CF-header is NOT restricted
  // pathCountry === restrictedCountry;    ===> the route is restricted
  // user is in US, goes to /be-fr/        ===> no-redirect
  // user is in FR, goes to /en-us/        ===> redirect
  // result: only users from US can go to /en-us/

  if (!DEBUG_MODE && isUserOnRestrictedCountry(PATH_COUNTRY, USER_COUNTRY, RESTRICTED_COUNTRY)) {
    return redirect(301, COUNTRY_RESTRICTED_PATH);
  }

  if (isLocaleSupported(app, currentLocale)) {
    // if the locale has uppercase letters, redirect to lowercase locale
    // ex /en-US/ will redirect to /en-us/ for SEO purposes
    if (currentLocale !== currentLocale.toLowerCase()) {
      urlPaths.splice(1, 1, currentLocale.toLowerCase());
      setCountryCookie(app, urlPaths[1]); // save 'de-at'

      const lowercaseLocale = urlPaths.join('/');
      return redirect(301, lowercaseLocale); // redirect with joined('/'), '/de-at/';
    }

    setCountryCookie(app, currentLocale); // save 'de-at'
    return null;
  }

  return null;
};
