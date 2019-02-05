export default {
  state() {
    return {
      customerService: {},
      footer: {},
      header: {},
      instantDelivery: {},
      paymentMethods: {},
      usps: {},
      gtmId: process.env.GTM_ID,
      page: '', // home / category / product
    };
  },

  getters: {
    customerService: ({ customerService }) => customerService,
    footer: ({ footer }) => footer,
    header: ({ header }) => header,
    instantDelivery: ({ instantDelivery }) => instantDelivery,
    paymentMethods: ({ paymentMethods }) => paymentMethods,
    usps: ({ usps }) => usps,
    gtmId: ({ gtmId }) => gtmId,
    page: ({ page }) => page,
  },

  mutations: {
    setCustomerService(state, customerService) {
      state.customerService = customerService;
    },
    setFooter(state, footer) {
      state.footer = footer;
    },
    setHeader(state, header) {
      state.header = header;
    },
    setUsps(state, usps) {
      state.usps = usps;
    },
    setInstantDelivery(state, instantDelivery) {
      state.instantDelivery = instantDelivery;
    },
    setPaymentMethods(state, paymentMethods) {
      state.paymentMethods = paymentMethods.icons;
    },
    setPage(state, page) {
      state.page = page;
    },
  },
};
