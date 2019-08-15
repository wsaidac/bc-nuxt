import { get } from 'lodash'

import translations from '~/assets/locales/translation-files/en-us.json'

// const config = require('../config/i18n')

export default {
  install(Vue, options = {}) {
    Vue.prototype.$i18n = {
      locale: 'en-us',
      locales: [
        {
          code: 'en-us',
          displayName: 'United States',
          name: 'US',
          currency: 'USD'
        }
      ],
    };
    Vue.prototype.$t = path => get(translations, path, 'wrong $t key');
  },
};
