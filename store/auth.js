const temporaryDummyQuickbuy = {
  id: 1,
  information: {
    retailValue: 15.0,
    currency: 'USD',
  },
  content: {
    title: 'Sporify Gift card $15',
    image: {
      desktop: 'https://static.rapido.com/categories/2086/Spotify_Green.png?v=1542612621540',
      mobile: 'https://static.rapido.com/categories/2086/Spotify_Green.png?v=1542612621540',
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
        name: 'Gift Cards',
        slug: '/spotify',
        categoryHeader: {
          image: {
            regular: 'https://static.rapido.com/categories/2086/Spotify_Green.png?v=1542612621540',
            retina: 'https://static.rapido.com/categories/2086/Spotify_Green.png?v=1542612621540',
          },
        },
        products: {
          nodes: [
            {
              id: 2,
              content: {
                title: 'Spotify gift card $10',
              },
              slug: '/verizon/10-usd',
            },
            {
              id: 3,
              content: {
                title: 'Spotify gift card $20',
              },
              slug: '/verizon/15-usd',
            },
            {
              id: 4,
              content: {
                title: 'Spotify gift card $25',
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
