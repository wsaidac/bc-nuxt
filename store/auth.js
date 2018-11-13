/* eslint-disable */

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
    currentUser: state => {
      email: "ronald@10k.nl"
    },
    token: state => "aERBOTlCRzEwVTgyNkF4NmErOG5JYWpKdzF1QUhuTklwYXpsbFBoMklBcUxkaWd3OTh6N3NLN1djM0FVd3ZDeHljZHVPcHdRZENkdEhMRUlLR1FmR1pNSVdEUlF2SUJzZENLRUFmdkhkZVNEclBsSE5TNzNHNEtqY2JucXVMRFotLU5XMi83akp1ZWhvdW5PTDkva1JXcHc9PQ==--296392b3ea0a62aba99a499912ffb2f2ae85f026",
    context: state => 11,
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
