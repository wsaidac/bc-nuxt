import store from './index.js';

const { mutations, getters } = store;

describe('store: auth', () => {
  /**
   * Mutations
   */
  it('mutations: `setCurrentUser` - set the token', () => {
    const state = { currentUser: null };
    mutations.setCurrentUser(state, {
      token: 'testToken',
      user: { name: 'testName' },
      orders: { order: 'a' },
      quickbuy: { qb: 'b' },
    });
    expect(state.token).toEqual('testToken');
  });

  it('mutations: `setCurrentUser` - set the currentUser', () => {
    const state = { currentUser: null };
    mutations.setCurrentUser(state, {
      token: 'testToken',
      user: { name: 'testName' },
      orders: { order: 'testOrder' },
      quickbuy: { qb: 'b' },
    });
    expect(state.currentUser).toEqual({
      name: 'testName',
      orders: { order: 'testOrder' },
      quickbuy: { qb: 'b' },
    });
  });

  it('mutations: `setToken`', () => {
    const state = { token: null };
    mutations.setToken(state, 'testToken');
    expect(state.token).toEqual('testToken');
  });

  it('mutations: `setContext` - the context (language, country and/or label) changed', () => {
    const state = {};
    mutations.setContext(state, 'testContext');
    expect(state.context).toEqual('testContext');
  });

  it('mutations: `clearToken` - a user logged out', () => {
    const state = {};
    mutations.clearToken(state);
    expect(state.token).toBeNull();
  });

  /**
   * Getters
   */
  it('getters: `context` - returns domain, label-name, label-id and trustpilot', () => {
    const state = { context: 'testContext' };
    const result = getters.context(state);
    expect(result).toEqual('testContext');
  });

  it('getters: `currentUser` - should return logged in user', () => {
    const state = { currentUser: 'testUser' };
    const result = getters.currentUser(state);
    expect(result).toEqual('testUser');
  });

  it('getters: `token` - should return users personal login-token', () => {
    const state = { token: 'testToken' };
    const result = getters.token(state);
    expect(result).toEqual('testToken');
  });
});
