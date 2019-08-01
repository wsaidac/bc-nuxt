import { get } from 'lodash';

export default {
  computed: {
    faqUrl() {
      const { link } = this.$store.getters['shared/customerService'];
      return get(link, 'url', 'https://faq.rapido.com/hc/en-us');
    },
  },
};
