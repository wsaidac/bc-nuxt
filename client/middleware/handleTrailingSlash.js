export default ({ redirect, route }) => {
  if (!process.server) return;

  const url = route.path; // example: /en-us/xbox-giftcard/
  const urlBreadcrumbs = url.split('/').filter(Boolean); // ['en-us', 'xbox-giftcard']
  const localeOnly = urlBreadcrumbs.length === 1;
  const isValidLocale = /^\w\w-\w\w$/.test(urlBreadcrumbs[0]); // /en-us/ or /country-restricted ---> true

  // /nl-nl AND /nl-nl//// ---> /nl-nl/
  const endsNotWithOneSlash = /.*?\w\/$/.test(url);
  if (localeOnly && isValidLocale && !endsNotWithOneSlash) {
    redirect(301, `/${urlBreadcrumbs}/`);
  }

  // /nl-nl/xbox-giftcard/ AND /nl-nl/xbox-giftcard//// ---> /nl-nl/xbox-giftcard
  const endsWithSlash = /.*?\/$/.test(url);
  if (!localeOnly && isValidLocale && endsWithSlash) {
    redirect(301, url.replace(/\/+$/, ''));
  }
};
