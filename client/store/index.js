import uuid from 'uuid/v4';

export default {
  state() {
    return {
      debug_mode: false,
    };
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
      // set tracking cookie
      if (query.aid) {
        app.$cookies.set('aid', query.aid, { path: '/' });
      }

      // set RiskifiedSessionId cookie if it does not exist
      if (!app.$cookies.get('RiskifiedSessionId')) {
        app.$cookies.set('RiskifiedSessionId', uuid(), { path: '/' });
      }

      commit('context/setDomain', req.headers.host);

      return dispatch('context/changeContext', { app, error });
    },
  },

  mutations: {
    setDebugMode(state, value) {
      state.debug_mode = value;
    },
  },
};
