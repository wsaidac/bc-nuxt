import store from './index';

const { mutations } = store;

describe('store: product', () => {
  /**
   * Mutations
   */
  it('mutations: `setAmount`', () => {
    const state = { amount: 1 };
    mutations.setAmount(state, 10);
    expect(state.amount).toEqual(10);
  });
});
