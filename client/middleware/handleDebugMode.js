import { cookies } from '~/constants';

export default ({
  app, query,
}) => {
  // set debug_mode cookie
  if (process.server && query.marketeer) {
    app.$cookies.set(cookies.DEBUG_COOKIE, query.marketeer, { path: '/', maxAge: 31536000 });
  }
};
