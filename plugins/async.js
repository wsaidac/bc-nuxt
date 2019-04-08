const setCurrentUser = async (app, store) => {
  try {
    const { data } = await app.$query('currentUser');
    if (data.user) {
      store.commit('auth/setCurrentUser', data.user);
    }
    return false;
  } catch (error) {
    return false;
  }
};

export default ({ app, store }) => {
  app.router.afterEach((to) => {
    store.commit('async/setLoaded', false);
    Promise.all([setCurrentUser(app, store, to.fullPath)]).then(() => {
      store.commit('async/setLoaded', true);
    });
  });
};
