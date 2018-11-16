/* eslint-disable */

export default {
  state() {
    return {
      context: 11,
      currentUser: null,
      token: null,
    };
  },

  getters: {
    context: state => state.context,
    currentUser: state => state.currentUser,
    token: state => state.token,
  },

  mutations: {
    setCurrentUser(state, { token, user, orders }) {
      const extensibleUser = Object.assign({}, user);
      extensibleUser.orders = Object.assign({}, orders);
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
