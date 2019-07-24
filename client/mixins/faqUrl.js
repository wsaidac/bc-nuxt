export default {
  computed: {
    faqUrl() {
      const { locale } = this.$store.state.i18n;
      const links = {
        'en-us': 'https://faq.rapido.com/hc/en-us',
        'en-gb': 'https://faq.rapido.com/hc/en-us',
        'fr-be': 'https://faq.rapido.com/hc/fr',
        'fr-ch': 'https://faq.rapido.com/hc/fr',
        'de-at': 'https://faq.rapido.com/hc/de',
        'de-ch': 'https://faq.rapido.com/hc/de',
        'pl-pl': 'https://faq.rapido.com/hc/pl',
        'da-dk': 'https://faq.rapido.com/hc/da',
        'es-es': 'https://faq.rapido.com/hc/es',
        'es-us': 'https://faq.rapido.com/hc/es',
        'it-it': 'https://faq.rapido.com/hc/it',
        'fi-fi': 'https://faq.rapido.com/hc/fi',
        'pt-pt': 'https://faq.rapido.com/hc/pt',
        'sk-sk': 'https://faq.rapido.com/hc/sk',
        'sv-se': 'https://faq.rapido.com/hc/se',
        'no-no': 'https://faq.rapido.com/hc/no',
        'nl-be': 'https://faq.rapido.com/hc/nl',
      };
      if (links[locale]) {
        return links[locale];
      }
      return links['en-us'];
    },
  },
};
