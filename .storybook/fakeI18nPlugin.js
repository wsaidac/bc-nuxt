import { get } from 'lodash'

import translations from '~/assets/locales/translation-files/en-us.json'


export default {
  install(Vue, options = {}) {
    Vue.prototype.$t = path => get(translations, path, 'wrong $t key');
  },
};
