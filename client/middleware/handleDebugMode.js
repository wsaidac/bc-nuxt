import { cookies } from '~/constants';

export default ({
  app, query, store,
}) => {
  // set debug_mode cookie
  if (query.marketeer) {
    store.commit('setDebugMode', query.marketeer);
    app.$cookies.set(cookies.DEBUG_COOKIE, query.marketeer, { path: '/', maxAge: 31536000 });
  }
};
