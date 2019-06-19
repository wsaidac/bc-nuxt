import SessionItem from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('session-item', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(SessionItem, {
      propsData: {
        session: {
          id: 1,
          platform: 'Windows',
          createdAt: '2018-08-08 12:12:12',
          browser: 'Chrome',
          ip: '127.0.0.1',
          mobile: false,
        },
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.cg-session-item').exists()).toBe(true);
  });

  it('should emit logout event', () => {
    $mounted.find('button').trigger('click');
    expect($mounted.emitted().logout);
  });

  // it('should match snapshot', () => {
  //   expect($mounted.html()).toMatchSnapshot();
  // });
});
