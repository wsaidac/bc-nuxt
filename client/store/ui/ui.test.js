import store from './index';

const { mutations, getters, actions } = store;

describe('store: ui', () => {
  /**
   * Actions
   */
  it('actions: `toggleOverlay` - call setOverlayVisibility', () => {
    const commit = jest.fn();
    actions.toggleOverlay({ commit }, { visibility: 'block', name: 'popup' });
    expect(commit).toHaveBeenCalledWith('setOverlayVisibility', 'block');
  });

  it('actions: `toggleOverlay` - call setOverlayName', () => {
    const commit = jest.fn();
    actions.toggleOverlay({ commit }, { visibility: 'block', name: 'popup' });
    expect(commit).toHaveBeenCalledWith('setOverlayName', 'popup');
  });

  /**
   * Mutations
   */
  it('mutations: `setOverlayVisibility`', () => {
    const state = { overlay: { visibility: 'hidden' } };
    mutations.setOverlayVisibility(state, 'block');
    expect(state.overlay.visibility).toEqual('block');
  });

  it('mutations: `setOverlayName`', () => {
    const state = { overlay: { name: '' } };
    mutations.setOverlayName(state, 'popup');
    expect(state.overlay.name).toEqual('popup');
  });

  /**
   * Getters
   */
  it('getters: `overlayVisibility`', () => {
    const state = { overlay: { visibility: 'block' } };
    const result = getters.overlayVisibility(state);
    expect(result).toEqual('block');
  });

  it('getters: `overlayName`', () => {
    const state = { overlay: { name: 'popup' } };
    const result = getters.overlayName(state);
    expect(result).toEqual('popup');
  });
});
