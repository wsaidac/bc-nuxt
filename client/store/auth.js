export default {
  state() {
    return {
      currentUser: null,
      token: null,
    };
  },
  getters: {
    context: (state) => state.context,
    currentUser: (state) => state.currentUser,
    token: (state) => state.token,
  },

  mutations: {
    setCurrentUser(state, {
      token, user, orders, quickbuy,
    }) {
      const extensibleUser = { ...user };
      extensibleUser.orders = { ...orders };
      extensibleUser.quickbuy = { ...quickbuy };
      state.token = token;
      state.currentUser = extensibleUser;
    },

    setToken(state, token) {
      state.token = token;
    },

    setContext(state, context) {
      state.context = context;
    },

    clearToken(state) {
      state.token = null;
    },
  },
};
