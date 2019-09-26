export default {
  state() {
    return {
      loaded: false,
      contextChanged: false,
    };
  },

  getters: {
    isLoaded: (state) => state.loaded,
    hasContextChanged: (state) => state.contextChanged,
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
