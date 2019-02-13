export default {
  state() {
    return {};
  },
  getters: {
    extendedGraphqlHeaders: (_state, _getters, _rootState, rootGetters) => {
      const token = rootGetters['auth/token'];
      const cmsContext = rootGetters['context/cmsContext'];

      return {
        'Authorization': `Bearer ${token}`,
        'X-Cms-Context': cmsContext,
      };
    },
  },
};
