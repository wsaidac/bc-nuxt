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
        'es-es': 'https://faq.rapido.com/hc/es',
        'it-it': 'https://faq.rapido.com/hc/it',
        'fi-fi': 'https://faq.rapido.com/hc/fi',
        'pt-pt': 'https://faq.rapido.com/hc/pt',
        'sk-sk': 'https://faq.rapido.com/hc/sk',
        'sv-se': 'https://faq.rapido.com/hc/se',
      };
      if (links[locale]) {
        return links[locale];
      }
      return links['en-us'];
    },
  },
};
