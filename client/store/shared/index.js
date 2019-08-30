import { get } from 'lodash';

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
      homeTitle: '',
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
    homeTitle: ({ title }) => title,
    faqUrl: ({ customerService }) => get(customerService, 'link.url', 'https://faq.rapido.com/hc/en-us'),
  },

  actions: {
    async fetchShared({ commit }, { app, error }) {
      try {
        const { data: { post } } = await app.$query('shared');
        if (!post) {
          error({ statusCode: 404, message: app.i18n.t('general.critical_error') });
        } else {
          commit('setHomeTitle', post.title);
          commit('setFooter', post.footer);
          commit('setHeader', post.header);
          commit('setCustomerService', post.customerService);
          commit('setInstantDelivery', post.instantDelivery);
          commit('setPaymentMethods', post.paymentMethods);
          commit('setUsps', post.usps);
        }
      } catch ({ statusCode, message }) {
        error({ statusCode, message });
      }
    },
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
    setHomeTitle(state, title) {
      state.title = title;
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
