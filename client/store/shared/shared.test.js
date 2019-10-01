import mock from '~/test/mocks/queries/shared.json';
import storeContext from '~/test/utils/with-store-context';
import store from './index';

const { actions, getters } = store;
const sharedMock = mock.post;

describe('store: shared', () => {
  /**
   * Actions
   */
  it('action:`fetchShared` - should commit 7 mutations', async () => {
    const commit = jest.fn();
    await actions.fetchShared({ commit }, storeContext);

    expect(commit).toHaveBeenCalledTimes(7);
  });

  /**
   * Getters
   */
  it('getters: `footer`', () => {
    const mockFooter = sharedMock.footer;
    const gotFooter = getters.footer(sharedMock);
    expect(gotFooter).toEqual(mockFooter);
  });

  it('getters: `header`', () => {
    const mockHeader = sharedMock.header;
    const gotHeader = getters.header(sharedMock);
    expect(gotHeader).toEqual(mockHeader);
  });

  it('getters: `usps`', () => {
    const mockUsps = sharedMock.usps;
    const gotUsps = getters.usps(sharedMock);
    expect(gotUsps).toEqual(mockUsps);
  });

  it('getters: `customerService`', () => {
    const mockCS = sharedMock.customerService;
    const gotCS = getters.customerService(sharedMock);
    expect(gotCS).toEqual(mockCS);
  });

  it('getters: `faqUrl`', () => {
    const mockCS = sharedMock.customerService;
    const faqUrl = mockCS.link.url;
    const gotFaqUrl = getters.faqUrl(sharedMock);
    expect(gotFaqUrl).toEqual(faqUrl);
  });
});
