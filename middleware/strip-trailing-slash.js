export default ({ redirect, route }) => {
  if (route.path.slice(-1) === '/') redirect(301, route.path.slice(0, -1));
};
