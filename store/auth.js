/* eslint-disable */

export default {
  state() {
    return {
      context: 11,
      currentUser: null,
      token: null,
    };
  },

  // getters: {
  //   context: state => state.context,
  //   currentUser: state => state.currentUser,
  //   token: state => state.token,
  // },

  getters: {
    currentUser: state => {
      'ronald@10k.nl';
    },
    token: state =>
      'U1dBTkp2cGExMkdpRnhmZk90TkQremFtQmhNMlFwL3JuajMzbWM2dWJidXRyWEJRSVp6a24vVlFKSGY3b09MQ2o2bjZwWlhMd2tpOEh5TVlkcXNlaUZaUkdJOThpVmNRZ05hN0g4Tlc0aytkNGUyWUtjc0psSC9sUFlQclNmNWotLTdWWmd3THpGbmhvZm9DdkVHWDhNSEE9PQ==--4dd4056025d58cef37bf8bd6d10496414d32dd40',
    context: state => 11,
    quickbuy: () => null,
  },

  mutations: {
    setCurrentUser(state, { token, user, orders }) {
      console.log('setting current user');
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
