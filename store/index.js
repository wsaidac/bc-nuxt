import Cookies from 'universal-cookie';

export default {
  state() {
    return {};
  },
  getters: {
    extendedGraphqlHeaders: (_state, _getters, rootState, rootGetters) => {
      const token = rootGetters['auth/token'];
      const cmsContext = rootGetters['context/cmsContext'];

      return {
        'Authorization': `Bearer ${token}`,
        'X-Cms-Context': cmsContext,
        'X-Authorization-Context': 11,
        'X-Locale-Context': rootState.i18n.locale,
      };
    },
  },

  actions: {
    nuxtServerInit({ dispatch, state }, { app, error, query, req }) {

      if (query.aid) {
        const cookies = new Cookies(req.headers.cookie);
        cookies.set('aid', query.aid, { path: '/'});
      }

      return dispatch('context/changeContext', { app, error, locale: state.i18n.locale });
    },
  },
};
