export default {
  state() {
    return {
      amount: 1,
    };
  },

  mutations: {
    setAmount(state, value) {
      state.amount = value;
    },
  },
};
