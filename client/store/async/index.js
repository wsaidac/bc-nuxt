export default {
  state() {
    return {
      loaded: false,
      contextChanged: false,
    };
  },

  getters: {
    isLoaded: state => state.loaded, // eslint-disable-line
    hasContextChanged: state => state.contextChanged, // eslint-disable-line
  },

  mutations: {
    setLoaded(state, bool) {
      state.loaded = bool;
    },
    setContextChange(state, bool) {
      state.contextChanged = bool;
    },
  },
};
