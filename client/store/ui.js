export default {
  state() {
    return {
      showOverlay: false,
    };
  },

  getters: {
    overlayState: state => state.showOverlay,
    hasContextChanged: state => state.contextChanged,
  },

  mutations: {
    toggleOverlay(state, bool) {
      state.showOverlay = bool;
    },
  },
};
