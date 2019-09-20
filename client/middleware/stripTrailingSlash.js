export default ({ redirect, route }) => {
  if (!process.server) return;

  const url = route.path;
  const times = url.split('/').length;
  console.log(times);

  if (times > 3 && /\/+$/.test(url)) {
    const formattedUrl = url.replace(/\/*$/, '/');
    redirect(301, formattedUrl);
  }
};
