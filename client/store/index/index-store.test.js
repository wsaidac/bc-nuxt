import uuid from 'uuid/v4';
import store from './index';
import storeContext from '~/test/utils/with-store-context';

jest.mock('uuid/v4');
uuid.mockReturnValueOnce(1);

const { app, error } = storeContext;
const query = { aid: 'aid' };

const { getters, actions } = store;

const commit = jest.fn();
const dispatch = jest.fn();

describe('store: index, actions', () => {
  beforeEach(() => {
    actions.nuxtServerInit({ commit, dispatch }, {
      ...storeContext,
      query,
      req: { headers: { host: null } },
    });
  });

  /**
   * Actions
   */
  it('actions: `nuxtServerInit` - should commit `context/setDomain`', () => {
    expect(commit).toHaveBeenCalledWith('context/setDomain', null);
  });

  it('actions: `nuxtServerInit` - should dispatch `context/changeContext`', () => {
    expect(dispatch).toHaveBeenCalledWith('context/changeContext', { app, error });
  });

  it('actions: `nuxtServerInit`- should call app.$cookies.set with aid', () => {
    expect(app.$cookies.set).toHaveBeenCalledWith('aid', query.aid, { path: '/' });
  });

  it('actions: `nuxtServerInit`- should call app.$cookies.set with RiskifiedSessionId', () => {
    expect(app.$cookies.set).toHaveBeenCalledWith(
      'RiskifiedSessionId',
      uuid(),
      { path: '/' },
    );
  });
});


describe('store: index, getters', () => {
  /**
   * Getters
   */
  it('getters: `extendedGraphqlHeaders`', () => {
    const rootGetters = {
      'auth/token': 'mockToken',
      'context/cmsContext': 'mockContext',
      'context/labelId': 'mockLabelId',
    };
    const rootState = { i18n: { locale: 'nl-nl' } };
    const result = getters.extendedGraphqlHeaders(null, null, rootState, rootGetters);
    expect(result).toEqual({
      'Authorization': 'Bearer mockToken',
      'X-Cms-Context': 'mockContext',
      'X-Authorization-Context': 'mockLabelId',
      'X-Locale-Context': 'nl-nl',
    });
  });
});
