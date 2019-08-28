export default {
  state() {
    return {
      overlay: {
        visibility: 'hidden',
        name: '',
      },
    };
  },

  getters: {
    overlayVisibility: state => state.overlay.visibility,
    overlayName: state => state.overlay.name,
  },

  actions: {
    toggleOverlay({ commit }, { visibility, name }) {
      commit('setOverlayVisibility', visibility);
      commit('setOverlayName', name);
    },
  },

  mutations: {
    setOverlayVisibility(state, visibility) {
      state.overlay.visibility = visibility;
    },
    setOverlayName(state, name) {
      state.overlay.name = name;
    },
  },
};
