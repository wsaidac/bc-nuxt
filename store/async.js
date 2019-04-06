export default {
  state() {
    return {
      loaded: false,
    };
  },

  getters: {
    isLoaded: state => state.loaded,
  },

  mutations: {
    setLoaded(state, bool) {
      state.loaded = bool;
    },
  },
};
