import { noop } from 'lodash';


const getMockResponse = (key = '') => {
  try {
    // eslint-disable-next-line
    const mock = require(`../mocks/queries/${key}.json`)
    return {
      data: mock,
    };
  } catch (error) {
    /* eslint-disable no-console */
    console.warning('invalid key file name in `with-store-context`');
    return {};
  }
};

const app = {
  $query: (key) => new Promise((resolve) => resolve(getMockResponse(key))),
  i18n: {
    t: noop,
  },
};

export default {
  app,
  error: noop,
};
