import store from './index';
import storeContext from '~/test/utils/with-store-context';

const { getters, actions } = store;

describe('store: index', () => {
  it('actions: `nuxtServerInit`', () => {
    const commit = jest.fn();
    const dispatch = jest.fn();
    actions.nuxtServerInit({ commit, dispatch }, {
      query: { aid: 'aid' },
      ...storeContext,
      req: { headers: { host: null } },
    });

    expect(commit).toHaveBeenCalledTimes(1);
  });
});
