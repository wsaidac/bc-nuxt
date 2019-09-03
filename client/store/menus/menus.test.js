
// Mocks
import menusMock from '~/test/mocks/queries/menus.json';
import footerMock from '~/test/mocks/queries/footer.json';
import expectedGetters from '~/test/mocks/store/footer';


import storeContext from '~/test/utils/with-store-context';
import store from './index';

const { actions, getters, mutations } = store;


describe('store: menus', () => {
  /**
   * Actions
   */

  it('actions:`fetchHeaderMenu` - should commit `setMain` mutation', async () => {
    const commit = jest.fn();
    await actions.fetchHeaderMenu({ commit }, storeContext);
    expect(commit).toHaveBeenCalledWith('setMain', menusMock.menus.nodes[0]);
  });

  it('actions:`fetchFooterMenu` - should commit `setFooter` mutation', async () => {
    const commit = jest.fn();
    await actions.fetchFooterMenu({ commit }, storeContext);
    expect(commit).toHaveBeenCalledWith('setFooter', footerMock);
  });

  /**
   * Getters
   */

  it('getters: `categoryLinks', () => {
    const state = {
      main: {},
    };

    mutations.setMain(state, menusMock.menus.nodes[0]);

    const categoryLinks = getters.categoryLinks(state);
    const toCompare = categoryLinks.map(({ categories, ...rest }) => rest);
    const expected = expectedGetters.categoryLinks.map(({ categories, ...rest }) => rest);
    expect(toCompare).toEqual(expected);
  });

  it('getters: `footerLinks', () => {
    const state = {
      footer: {},
    };

    mutations.setFooter(state, footerMock);

    const footerLinks = getters.footerLinks(state);
    expect(footerLinks).toEqual(expectedGetters.footerLinks);
  });

  it('getters: `legalLinks', () => {
    const legalLinks = getters.legalLinks({}, expectedGetters);
    expect(legalLinks).toEqual(expectedGetters.legalLinks);
  });


  it('getters: `serviceLinks', () => {
    const serviceLinks = getters.serviceLinks({}, expectedGetters);
    expect(serviceLinks).toEqual(expectedGetters.serviceLinks);
  });
});
