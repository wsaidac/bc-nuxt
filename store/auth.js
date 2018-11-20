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
