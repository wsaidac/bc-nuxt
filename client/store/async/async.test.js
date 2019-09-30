import store from './index';

const { mutations, getters } = store;

describe('store: async', () => {
  /**
   * Mutations
   */
  it('mutations: `setLoaded`, toggles spinner at quickbuy and login', () => {
    const state = { loaded: true };
    mutations.setLoaded(state, false);
    expect(state.loaded).toEqual(false);
  });

  it('mutations: `setContextChange`, toggles global/page-spinner', () => {
    const state = { setContextChange: true };
    mutations.setContextChange(state, false);
    expect(state.contextChanged).toEqual(false);
  });

  /**
   * Getters
   */
  it('getters: `isLoaded`', () => {
    const state = { loaded: true };
    const result = getters.isLoaded(state);
    expect(result).toEqual(true);
  });

  it('getters: `hasContextChanged`', () => {
    const state = { contextChanged: true };
    const result = getters.hasContextChanged(state);
    expect(result).toEqual(true);
  });
});
