const temporaryDummyQuickbuy = {
  id: 1,
  information: {
    retailValue: 15.0,
    currency: 'USD',
  },
  content: {
    title: 'Verizon Prepaid Refill $5',
    image: {
      desktop: 'https://example.com/xbox.jpg',
      mobile: 'https://example.com/xbox.jpg',
    },
    tooltip: {
      content: 'Long text to show when tooltip is hovered',
      title: 'Short text to show when tooltip is not yet hovered',
    },
  },
  slug: '/product123',
  title: 'title',
  categories: {
    nodes: [
      {
        name: 'easy',
        slug: '/easy',
        products: {
          nodes: [
            {
              id: 2,
              content: {
                title: 'Verizon Prepaid Refill $10',
              },
              slug: '/verizon/10-usd',
            },
            {
              id: 3,
              content: {
                title: 'Verizon Prepaid Refill $15',
              },
              slug: '/verizon/15-usd',
            },
            {
              id: 4,
              content: {
                title: 'Verizon Prepaid Refill $20',
              },
              slug: '/verizon/20-usd',
            },
          ],
        },
      },
    ],
  },
};

export default {
  state() {
    return {
      context: 11,
      currentUser: {
        quickbuy: temporaryDummyQuickbuy,
      },
      token:
        'Vm52MldvaWhaTURJUStUQ2ZwU0g2ZlM5MzdsSW9BNEhjWUxiN1Y4bzZZWmpYN2h0bUtvVmFrWHZtQ1QrNXNOMGg0R0t0L1g5aXNSNzZWNWp6b0xpTmd5RmY0RXJIaEo1eWR0SUxzSG1DMUkvb2UwOXVpb2E1dVZObFNXdXErUjItLVliU2hhMjAzc0NVMnExWlU2Q1YyR2c9PQ==--f8a617a657d463fed3dfc7e49102cb9320a91f2a',
      // token: null,
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
      extensibleUser.quickbuy = temporaryDummyQuickbuy;
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
