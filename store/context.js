export default {
  state() {
    return {
      label: process.env.LABEL,
      domain: process.env.DOMAIN,
      cmsContext: '',
    };
  },
  getters: {
    label: ({ label }) => label,
    domain: ({ domain }) => domain,
    cmsContext: (_, { label }, { i18n }) => `${label}-${i18n.locale}`,
  },

  actions: {
    changeContext({ dispatch }, { app, error }) {
      dispatch('shared/fetchShared', { app, error }, { root: true });
      dispatch('menus/fetchHeaderMenu', { app, error }, { root: true });
      dispatch('menus/fetchFooterMenu', { app, error }, { root: true });
    },
  },
};
