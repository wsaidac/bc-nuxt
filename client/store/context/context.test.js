import store from './index';
import storeContext from '~/test/utils/with-store-context';

const {
  actions, getters, mutations,
} = store;

describe('store: context', () => {
  /**
   * Mutations
   */
  it('mutations: `setDomain`', () => {
    const state = { domain: 'pref' };
    mutations.setDomain(state, 'rapido');
    expect(state.domain).toEqual('rapido');
  });

  /**
   * Getters
   */
  it('getters: `domain`', () => {
    const state = { domain: 'rapido' };
    const result = getters.domain(state);
    expect(result).toEqual('rapido');
  });

  it('getters: `cmsContext`', () => {
    const state = { labelName: 'rapido' };
    expect(getters.cmsContext(state, {}, { i18n: { locale: 'en-us' } })).toEqual('rapido-en-us');
  });

  /**
   * Actions
   */
  it('actions: `changeContext` - should dispatch 3 actions', () => {
    const dispatch = jest.fn();
    actions.changeContext({ dispatch }, storeContext);
    expect(dispatch).toHaveBeenCalledTimes(3);
  });
});
