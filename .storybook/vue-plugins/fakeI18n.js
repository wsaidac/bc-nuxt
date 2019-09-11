import { get } from 'lodash';

import translations from '~/assets/locales/translation-files/en-us.json';
import locales from '~~/config/i18n/localesConfig';


export default {
  install(Vue, options = {}) {
    Vue.prototype.$i18n = {
      locale: 'en-us',
      locales: Object.values(locales),
    };
    Vue.prototype.$t = path => get(translations, path, 'wrong $t key');
    Vue.prototype.$n = value => `$${value}`
  },
};
