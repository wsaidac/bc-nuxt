export default {
  computed: {
    faqUrl() {
      const { locale } = this.$store.state.i18n;
      const links = {
        'en-us': 'https://faq.rapido.com/hc/en-us',
        'fr-be': 'https://faq.rapido.com/hc/fr',
        'de-at': 'https://faq.rapido.com/hc/de',
        'pl-pl': 'https://faq.rapido.com/hc/pl',
        'da-dk': 'https://faq.rapido.com/hc/da',
      };
      if (links[locale]) {
        return links[locale];
      }
      return links['en-us'];
    },
  },
};
