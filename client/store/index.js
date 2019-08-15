export default {
  state() {
    return {};
  },
  getters: {
    extendedGraphqlHeaders: (_state, _getters, rootState, rootGetters) => {
      const token = rootGetters['auth/token'];
      const cmsContext = rootGetters['context/cmsContext'];
      const labelId = rootGetters['context/labelId'];

      return {
        'Authorization': `Bearer ${token}`,
        'X-Cms-Context': cmsContext,
        'X-Authorization-Context': labelId,
        'X-Locale-Context': rootState.i18n.locale,
      };
    },
  },

  actions: {
    nuxtServerInit({ dispatch, commit }, {
      app, error, query, req,
    }) {
      if (query.aid) {
        app.$cookies.set('aid', query.aid, { path: '/' });
      }

      commit('context/setDomain', req.headers.host);

      return dispatch('context/changeContext', { app, error });
    },
  },
};
