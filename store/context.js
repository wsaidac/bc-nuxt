export default {
  state() {
    return {
      label: process.env.LABEL,
      domain: process.env.DOMAIN,
      country: null,
      language: null,
    };
  },
  getters: {
    label: ({ label }) => label,
    domain: ({ domain }) => domain,
    country: ({ country }) => country,
    language: ({ language }) => language,
    locale: ({ country, language }) => `${language}-${country}`,
    cmsContext: ({ label, country, language }) => `${label}-${language}-${country}`,
  },

  mutations: {
    setCurrentCountry(state, country) {
      state.country = country;
    },

    setCurrentLanguage(state, language) {
      state.language = language;
    },
  },

  actions: {
    changeContext(context, locale) {
      context.commit('setCurrentCountry', locale.slice(3));
      context.commit('setCurrentLanguage', locale.slice(0, 2));
    },
  },
};
