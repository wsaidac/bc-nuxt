import { get } from 'lodash';
import { cookieAge } from '~/constants';

const localeDidNotChange = ({ route, app }) => route.path.substring(1).startsWith(app.i18n.locale);

const isDebugMode = ({ app, query = {} }) => {
  const debugCookie = app.$cookies.get('debug_mode');
  if (debugCookie) return true;
  if (query.marketeer) {
    app.$cookies.set('debug_mode', query.marketeer, { path: '/' });
    return true;
  }
  return false;
};

const getLocaleFromPath = (currentPath) => currentPath.split('/')[1];

const setLocaleCookie = (cookies, currentPath) => {
  const locale = getLocaleFromPath(currentPath);
  if (!locale) return;
  cookies.set('locale', locale, cookieAge);
};

const getUserLocale = ({ i18n, userCountry }) => {
  const localeObject = i18n.locales.find((localeConfig) => localeConfig.name === userCountry);
  return localeObject && localeObject.code;
};

const isNotAllowedToVisit = (locale, { userLocale, i18n }) => {
  const restrictedCountries = i18n.locales.filter((localeConfig) => localeConfig.restricted).map((c) => c.name.toLowerCase() || '');
  const localeCountry = locale.split('-')[1];
  const userCountry = userLocale.split('-')[1];
  const isRestrictedCountry = restrictedCountries.includes(localeCountry);
  const isNotACitizen = localeCountry !== userCountry;

  return isRestrictedCountry && isNotACitizen;
};

const transformPath = (currentPath, helpers) => {
  helpers.userLocale = getUserLocale(helpers) || '';

  const currentLocale = getLocaleFromPath(currentPath);
  if (!currentLocale && helpers.debug) return `/${helpers.i18n.defaultLocale}/`;

  const newLocale = currentLocale || helpers.cookies.get('locale') || helpers.userLocale;
  if (!newLocale || isNotAllowedToVisit(newLocale, helpers)) return '/country-restricted';
  if (!currentLocale) return `/${newLocale}/`;

  return currentPath;
};

export default (context = {}) => {
  const {
    app,
    redirect,
    route,
    req,
  } = context;

  if (!process.server && localeDidNotChange(context)) return;

  const helpers = {
    debug: isDebugMode(context),
    i18n: app.i18n,
    cookies: app.$cookies,
    userCountry: get(req, 'headers["cloudfront-viewer-country"]', ''), // format: US
  };

  const routeTo = transformPath(route.path.toLowerCase(), helpers);

  setLocaleCookie(app.$cookies, routeTo);

  if (routeTo !== route.path) redirect(301, routeTo);
};
