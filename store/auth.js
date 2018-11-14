export default {
  state() {
    return {
      token: null,
      currentUser: null,
      context: 11,
    };
  },

  // getters: {
  //   currentUser: state => state.currentUser,
  //   token: state => state.token,
  //   context: state => state.context,
  // },

  getters: {
    currentUser: (state) => {
      'ronald@10k.nl';
    },
    token: state => 'T1Y0bnVMNlBtUDhHRlNSMENZTlRQSXVKbUFUeGFUZUtBM0YrRVN4bDdranBFYndvUnVibGFlVnNSZCttaFIwRHhWWHYzeUZjUGJibm5TRDlIQmFHTzlBM0dNVi92ZTFuaTY3bTRYWDRJalJaOEN4QW1HVXFkM0FKc3pqbDVIc0YtLXJhVHdERGlNREZPMHVIdVAwbjBCZkE9PQ==--d0ac27c479b1bd2004882f229d7410841fab5bbc',
    context: state => 11,
    quickbuy: state => null,
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
