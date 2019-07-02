const termsOfUseUrl = {
  computed: {
    termsOfUseUrl() {
      const { locale } = this.$store.state.i18n;
      const links = {
        'en-us': '/en-us/general-conditions',
        'fr-be': '/fr-be/comment-ca-marche',
        'de-at': '/de-at/webseitenfunktion',
        'pl-pl': '/pl-pl/warunki',
        'da-dk': '/da-dk/generelle-betingelser',
        'es-es': '/es-es/condiciones-generales',
        'it-it': '/en-us/general-conditions',
        'fi-fi': '/en-us/general-conditions',
      };
      if (links[locale]) {
        return links[locale];
      }
      return links['en-us'];
    },
  },
};

const privacyPolicyUrl = {
  computed: {
    privacyPolicyUrl() {
      const { locale } = this.$store.state.i18n;
      const links = {
        'en-us': '/en-us/privacy',
        'fr-be': '/fr-be/politique-de-confidentialite',
        'de-at': '/de-at/datenschutzerklaerung',
        'pl-pl': '/pl-pl/prywatnosc-i-bezpieczenstwo',
        'da-dk': '/da-dk/fortrolighedspolitik',
        'es-es': '/es-es/politica-de-privacidad',
        'it-it': '/en-us/privacy',
        'fi-fi': '/en-us/privacy',
      };
      if (links[locale]) {
        return links[locale];
      }
      return links['en-us'];
    },
  },
};

export { termsOfUseUrl, privacyPolicyUrl };
