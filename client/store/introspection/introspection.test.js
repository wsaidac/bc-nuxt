import store from './index';

const { mutations, getters } = store;

describe('store: introspection', () => {
  /**
   * Mutations
   */
  it('mutations: `setModel`', () => {
    const state = { models: {} };
    mutations.setModel(state, { name: 'propName', data: 'data' });
    expect(state.models.propName).toEqual('data');
  });

  /**
   * Getters
   */
  it('getters: `models`', () => {
    const state = { models: { propName: 'data' } };
    const result = getters.models(state);
    expect(result).toEqual({ propName: 'data' });
  });
});
