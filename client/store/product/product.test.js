import store from './index';

const { mutations } = store;

describe('store: product', () => {
  /**
   * Mutations
   */
  it('mutations: `setAmount` - should set the amount a user orders, defaults to 1. This numbers models the dropdown on a product-card', () => {
    const state = { amount: 1 };
    mutations.setAmount(state, 10);
    expect(state.amount).toEqual(10);
  });
});
