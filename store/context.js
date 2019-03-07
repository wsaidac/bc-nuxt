export default {
  state() {
    return {
      label: null,
      country: null,
      language: null,
    };
  },
  getters: {
    label: ({ label }) => label,
    country: ({ country }) => country,
    language: ({ language }) => language,
    locale: ({ country, language }) => `${language}-${country}`,
    cmsContext: ({ label, country, language }) => `${label}-${language}-${country}`,
  },

  mutations: {
    setCurrentLabel(state, label) {
      state.label = label;
    },

    setCurrentCountry(state, country) {
      state.country = country;
    },

    setCurrentLanguage(state, language) {
      state.language = language;
    },
  },
};
