const { get } = require('lodash');

const EN_US_LOCALE = 'en-us';
const COUNTRY_RESTRICTED = 'country-restricted';
const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;

/**
 * Method to validate if the new request has change the locale route
 * @param {Object} context.app
 * @param {Object} context.route
 */
const localeDiDNotChange = ({ app, route }) => route.path.substring(1).startsWith(app.i18n.locale);

/**
 * Method to set 'country' cookie in Nuxt server context
 * @param {Object} app Nuxt app context
 * @param {String} countryCode  example: `pt-pt`
 */
const setCountryCookie = (app, countryCode) => {
  app.$cookies.set('country', countryCode, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
};

/**
 * Method to validate if the viewer country exists in the country shops list
 * if it exists return it locale. Example: `pt-pt`
 * @param {Object} app Nuxt app context
 * @param {String} cloudfrontViewerCountry cloudfrount header with viewer country info
 * @return {String|Null} locale if exists in the country shops lists, else it returns null
 */
const getCloudfrontCountryInLocales = (app, cloudfrontViewerCountry) => {
  const locales = get(app, 'i18n.locales', []);

  const cloudfrontLocale = locales
    .find(locale => locale.name.toLowerCase() === cloudfrontViewerCountry.toLowerCase());

  return cloudfrontLocale ? cloudfrontLocale.code.toLowerCase() : null;
};

/**
 * Method to resolves redirect if the viewer doesn't have a cookie assigned and the current locale is restricted
 * @param {Object} context Nuxt request context
 */
const redirectIfHasNotCountryCookie = ({ app, req, redirect }) => {
  const cloudfrontViewerCountry = req ? req.headers['cloudfront-viewer-country'] : null; // format: /pt-pt/

  // if not cloudfront viewer country header redirect to 'country-restricted' page
  if (!cloudfrontViewerCountry) return redirect(301, COUNTRY_RESTRICTED_PATH);
  const locale = getCloudfrontCountryInLocales(app, cloudfrontViewerCountry);

  // if the cloudfront-viewer-locale isn't in the i18n current locales redirect to 'country-restricted' page
  if (!locale) return redirect(301, COUNTRY_RESTRICTED_PATH);
  // if the extracted cloudfront-viewer-locale code is different to `/en-us` rediret it to `country-restricted` page
  if (locale !== EN_US_LOCALE) return redirect(301, COUNTRY_RESTRICTED_PATH);

  setCountryCookie(app, locale);
  return redirect(301, `/${locale}/`);
};

/**
 * Method to resolves router redirection if the current route doesn't have a locale
 * @param {Object} context Nuxt Request context
 */
const redirectIfPathDoesNotHaveLocale = (context) => {
  const { app, redirect } = context;
  // check if already exists a cookie with the visitor country
  const countryCookie = app.$cookies.get('country');
  if (countryCookie) {
    return redirect(301, `/${countryCookie}/`);
  }

  return redirectIfHasNotCountryCookie(context);
};


/**
 * Method to resolves router redirection if the current locale is restricted for outsiders. For now just `en-us`
 * @param {Object} context Nuxt Request context
 */
const redirectIfLocaleIsRestricted = (context) => {
  const { app, redirect } = context;
  // check if already exists a cookie with the visitor country
  const countryCookie = app.$cookies.get('country');
  if (countryCookie) {
    if (countryCookie !== EN_US_LOCALE) {
      return redirect(301, COUNTRY_RESTRICTED_PATH);
    }
    return redirect(301, `/${countryCookie}/`);
  }

  return redirectIfHasNotCountryCookie(context);
};

export default (context = {}) => {
  const {
    app,
    redirect,
    route,
  } = context;
  // if the locale hasn't change
  if (!process.server && localeDiDNotChange(context)) return null;

  const urlPaths = route.path.split('/').filter(Boolean); // ['locale', 'category']
  const basePath = urlPaths[0];

  // if basePath === 'country-restricted' continue
  if (basePath === COUNTRY_RESTRICTED) {
    return null;
  }

  const currentLocale = basePath;
  if (!currentLocale) return redirectIfPathDoesNotHaveLocale(context);

  if (currentLocale === EN_US_LOCALE) return redirectIfLocaleIsRestricted(context);

  // if the locale has uppercase letters, redirect to lowercase locale
  // ex /en-US/ will redirect to /en-us/ for SEO purposes
  if (currentLocale !== currentLocale.toLowerCase()) {
    urlPaths.splice(1, 1, currentLocale.toLowerCase());

    return redirect(301, urlPaths.join('/'));
  }

  if (currentLocale) {
    setCountryCookie(app, currentLocale);
  }

  return null;
};
