export default ({ redirect, route }) => {
  if (!process.server) return;

  const url = route.path;
  const times = url.split('/').length;

  if (times > 3 && /\/+$/.test(url)) {
    const formattedUrl = url.replace(/\/+$/, '');
    redirect(301, formattedUrl);
  }
};
