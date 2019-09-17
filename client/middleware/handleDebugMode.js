import { cookies } from '~/constants';

export default ({
  app, query,
}) => {
  // set debug_mode cookie
  if (query.marketeer && !app.$cookies.get(cookies.DEBUG_COOKIE)) {
    app.$cookies.set(cookies.DEBUG_COOKIE, query.marketeer, { path: '/', maxAge: 31536000 });
  }
};
