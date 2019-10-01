export default {
  state() {
    return {
      models: {},
    };
  },

  getters: {
    models: (state) => state.models,
  },

  mutations: {
    setModel(state, { name, data }) {
      state.models[name] = data;
    },
  },
};
