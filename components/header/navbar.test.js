import HeaderNavbar from './navbar.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderNavbar', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(HeaderNavbar, {
      stubs: ['header-login', 'header-links-desktop', 'header-links-mobile', 'header-locale-select'],
      mocks: {
        $i18n: {
          locale: {
            code: 'en-us',
            iso: 'en-US',
            file: 'en-us.json',
            name: 'US',
            displayName: 'United States',
          },
        },
      },
      computed: {
        country() {
          return {
            code: 'en-us',
            iso: 'en-US',
            file: 'en-us.json',
            name: 'US',
            displayName: 'United States',
          };
        },
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.header-navbar').exists()).toBe(true);
  });
});
