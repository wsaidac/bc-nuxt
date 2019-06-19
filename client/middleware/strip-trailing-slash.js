
function endsWithSlash(url) {
  return url.slice(-1) === '/';
}

function stripTrailSlash(url) {
  if (endsWithSlash(url)) {
    return stripTrailSlash(url.slice(0, -1));
  }
  return url;
}


export default ({ redirect, route }) => {
  if (!process.server) return;

  const url = route.path;
  const times = url.split('/').length - 1;

  if (times > 2 && endsWithSlash(url)) {
    const formattedUrl = stripTrailSlash(url);
    redirect(301, formattedUrl);
  }
};
