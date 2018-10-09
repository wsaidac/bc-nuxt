export default {
  state() {
    return {
      customerService: {},
      footer: {},
      instantDelivery: {},
      paymentMethods: {},
    };
  },

  getters: {
    customerService: ({ customerService }) => customerService,
    footer: ({ footer }) => footer,
    instantDelivery: ({ instantDelivery }) => instantDelivery,
    paymentMethods: ({ paymentMethods }) => paymentMethods,
  },

  mutations: {
    setCustomerService(state, customerService) {
      state.customerService = customerService;
    },
    setFooter(state, footer) {
      state.footer = footer;
    },
    setInstantDelivery(state, instantDelivery) {
      state.instantDelivery = instantDelivery;
    },
    setPaymentMethods(state, paymentMethods) {
      state.paymentMethods = paymentMethods.icons;
    },
  },
};
