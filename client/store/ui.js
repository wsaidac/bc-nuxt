export default {
  state() {
    return {
      showOverlay: false,
    };
  },

  getters: {
    overlayState: state => state.showOverlay,
  },

  mutations: {
    toggleOverlay(state, bool) {
      state.showOverlay = bool;
    },
  },
};
