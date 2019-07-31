export default {
  computed: {
    faqUrl() {
      const { link } = this.$store.getters['shared/customerService'];
      return link.url || 'https://faq.rapido.com/hc/en-us';
    },
  },
};
