export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    store.commit('async/setLoaded', false);
    app.$query('currentUser').then(({ data }) => {
      store.commit('async/setLoaded', true);
      store.commit('auth/setCurrentUser', data.user);
    });
    next();
  });
};
