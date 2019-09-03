const { get } = require('lodash');

const EN_US_LOCALE = 'en-us';
const COUNTRY_RESTRICTED = 'country-restricted';
const COUNTRY_RESTRICTED_PATH = `/${COUNTRY_RESTRICTED}`;

const routeDiDNotChange = ({ app, route }) => route.path.substring(1).startsWith(app.i18n.locale);

const setCountryCookie = (app, countryCode) => {
  app.$cookies.set('country', countryCode, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
};

const getCloudfrontCountryInLocales = (app, cloudfrontViewerCountry) => {
  const locales = get(app, 'i18n.locales', []);

  const cloudfrontLocale = locales
    .find(locale => locale.name.toLowerCase() === cloudfrontViewerCountry.toLowerCase());

  return cloudfrontLocale ? cloudfrontLocale.code.toLowerCase() : null;
};

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

const redirectIfPathDoesNotHaveLocale = (context) => {
  const { app, redirect } = context;
  // check if already exists a cookie with the visitor country
  const countryCookie = app.$cookies.get('country');
  if (countryCookie) {
    return redirect(301, `/${countryCookie}/`);
  }

  return redirectIfHasNotCountryCookie(context);
};


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
  if (!process.server && routeDiDNotChange(context)) return null;

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
