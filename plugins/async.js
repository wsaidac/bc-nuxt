const setCurrentUser = async (app, store, path) => {
  if (path.startsWith('/account') || path.startsWith('/sessions')) return;
  const { data } = await app.$query('currentUser');
  if (!data.user) return;
  store.commit('auth/setCurrentUser', data.user);
};

export default ({ app, store }) => {
  app.router.afterEach((to, from) => {
    store.commit('async/setLoaded', false);
    Promise.all([setCurrentUser(app, store, to.fullPath)]).then(() => {
      store.commit('async/setLoaded', true);
    });
  });
};
