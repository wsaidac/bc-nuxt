import merchantsConfig from '~~/config/i18n/merchantsConfig';

const label = process.env.LABEL || 'rapido';

export default {
  state() {
    return {
      labelName: label,
      labelId: merchantsConfig[label].id,
      domain: '',
      cmsContext: '',
    };
  },
  getters: {
    label: ({ labelName }) => labelName,
    labelId: ({ labelId }) => labelId,
    domain: ({ domain }) => domain,
    cmsContext: ({ labelName }, _, { i18n }) => `${labelName}-${i18n.locale}`,
  },

  actions: {
    changeContext({ dispatch }, { app, error }) {
      return Promise.all([
        dispatch('shared/fetchShared', { app, error }, { root: true }),
        dispatch('menus/fetchHeaderMenu', { app, error }, { root: true }),
        dispatch('menus/fetchFooterMenu', { app, error }, { root: true }),
      ]);
    },
  },

  mutations: {
    setDomain(state, domain) {
      state.domain = domain;
    },
  },

};
