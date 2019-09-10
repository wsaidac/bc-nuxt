import Cookies from 'universal-cookie';
import createPersistedState from 'vuex-persistedstate';
import merge from 'deepmerge';

export default ({ store, req }) => {
  const cookies = new Cookies(process.server && req.headers.cookie);
  const storageKey = 'store';

  createPersistedState({
    key: storageKey,

    paths: ['auth.token', 'product.amount'],

    storage: {
      getItem: (key) => cookies.get(key),
      setItem: (key, value) => cookies.set(key, value, { path: '/' }),
      removeItem: (key) => cookies.remove(key),
    },
  })(store);

  if (process.server && cookies.get(storageKey)) {
    const savedState = cookies.get(storageKey);
    store.replaceState(merge(store.state, savedState, { clone: false }));
  }
};
