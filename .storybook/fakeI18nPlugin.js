import { get } from 'lodash'

export default {
  install(Vue, options = {}) {
    const { translations } = options;
    Vue.prototype.$t = path => get(translations, path, 'wrong $t key');
  },
};
