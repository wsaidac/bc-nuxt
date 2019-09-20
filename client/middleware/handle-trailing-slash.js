
function endsWithSlash(url) {
  return url.slice(-1) === '/';
}

function stripTrailSlash(url) {
  if (endsWithSlash(url)) {
    return stripTrailSlash(url.slice(0, -1));
  }
  return url;
}

function isValidLocale(slug) {
  return slug.length === 5 && slug[2] === '-';
}

export default ({ redirect, route }) => {
  if (!process.server) return;

  const url = route.path; // example: /en-us/xbox-giftcard/

  const urlBreadcrumbs = url.split('/').filter(Boolean); // ['en-us', 'xbox-giftcard']
  const times = urlBreadcrumbs.length;
  const locale = urlBreadcrumbs[0]; // /en-us/ or /country-restricted

  if (times === 1 && isValidLocale(locale) && !endsWithSlash(url)) {
    redirect(301, `${url}/`);
  }

  if (times > 1 && endsWithSlash(url)) {
    const formattedUrl = stripTrailSlash(url);
    redirect(301, formattedUrl);
  }
};
