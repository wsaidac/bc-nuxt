import store from './index';

const { mutations, getters } = store;

describe('store: async', () => {
  /**
   * Mutations
   */
  it('mutations: `setLoaded`', () => {
    const state = { loaded: true };
    mutations.setLoaded(state, false);
    expect(state.loaded).toEqual(false);
  });

  it('mutations: `setContextChange`', () => {
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
