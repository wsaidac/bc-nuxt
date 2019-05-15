import { get } from 'lodash';

export default {
  filters: {
    dig(object, path, fallback) {
      return get(object, path, fallback || '');
    },
  },
};
