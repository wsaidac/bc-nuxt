import HeaderNavbar from './navbar.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderNavbar', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(HeaderNavbar, {
      stubs: ['header-login', 'header-links-desktop', 'header-links-mobile'],
    });
  });

  it('should mount', () => {
    expect($mounted.find('.header-navbar').exists()).toBe(true);
  });
});
