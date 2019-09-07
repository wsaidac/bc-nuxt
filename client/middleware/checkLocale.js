import { get } from 'lodash';

const setCountryCookie = (app, countryCode) => {
  app.$cookies.set('country', countryCode, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
};

const isLocaleSupported = (app, curentLocale) => {
  const { locales } = app.i18n;

  return Boolean(locales.find(locale => locale.code.toLowerCase() === curentLocale.toLowerCase()));
};


const isUserCountrySupported = (app, userCountry) => {
  const { locales } = app.i18n;
  return locales.find(locale => locale.name.toLowerCase() === userCountry.toLowerCase());
};

const isUserOnRestrictedCountry = (pathCountry, userCountry, restrictedCountry) => userCountry !== restrictedCountry && pathCountry === restrictedCountry;

export default (context = {}) => {
  const {
    app,
    redirect,
    route,
    req,
  } = context;

  const localeDiDNotChange = route.path.substring(1).startsWith(app.i18n.locale);
  if (!process.server && localeDiDNotChange) return null;

  const RESTRICTED_COUNTRY = app.i18n.locales.find(locale => locale.restricted).name; // format: DE;
  const USER_COUNTRY = get(req, 'headers["cloudfront-viewer-country"]', ''); // format: US
  const COUNTRY_RESTRICTED = 'country-restricted';
  const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;
  const LOCALE_COOKIE = app.$cookies.get('country');
  const urlPaths = route.path.split('/');
  const currentLocale = urlPaths[1];
  const PATH_COUNTRY = currentLocale.split('-')[1] ? currentLocale.split('-')[1].toUpperCase() : null;

  if (!currentLocale && USER_COUNTRY !== RESTRICTED_COUNTRY && !isUserCountrySupported(app, USER_COUNTRY)) {
    return redirect(301, COUNTRY_RESTRICTED_PATH);
  }

  if (!currentLocale && isUserCountrySupported(app, USER_COUNTRY)) {
    const supportedLocale = app.i18n.locales.find(locale => locale.name === USER_COUNTRY).code;

    if (LOCALE_COOKIE) {
      return redirect(301, `/${LOCALE_COOKIE}`);
    }

    setCountryCookie(app, supportedLocale);
    return redirect(301, `/${supportedLocale}`);
  }

  if (isUserOnRestrictedCountry(PATH_COUNTRY, USER_COUNTRY, RESTRICTED_COUNTRY)) {
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
