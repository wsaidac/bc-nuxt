import createPersistedState from 'vuex-persistedstate';
import merge from 'deepmerge';

export default ({ store, app }) => {
  const storageKey = 'store';

  createPersistedState({
    key: storageKey,

    paths: ['auth.token', 'product.amount'],

    storage: {
      getItem: key => app.$cookies.get(key),
      setItem: (key, value) => app.$cookies.set(key, value, { path: '/' }),
      removeItem: key => app.$cookies.remove(key),
    },
  })(store);

  if (process.server && app.$cookies.get(storageKey)) {
    const savedState = app.$cookies.get(storageKey);
    store.replaceState(merge(store.state, savedState, { clone: false }));
  }
};
