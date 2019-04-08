

export default ({
  app, redirect, route,
}) => {
  if (!process.server && route.path.substring(1).startsWith(app.i18n.locale)) return null;

  const urlPaths = route.path.split('/');
  const locale = urlPaths[1];

  // if there is no locale slug in the url, redirect to default locale
  if (!locale) {
    return redirect(301, `/${app.i18n.defaultLocale}/`);
  }

  // if the locale has uppercase letters, redirect to lowercase locale
  // ex /en-US/ will redirect to /en-us/ for SEO purposes
  if (locale !== locale.toLowerCase()) {
    urlPaths.splice(1, 1, locale.toLowerCase());

    return redirect(301, urlPaths.join('/'));
  }

  return null;
};
