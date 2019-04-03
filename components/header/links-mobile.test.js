import HeaderLinksMobile from './links-mobile.vue';
import { mount } from '~/test/utils/with-context';

import { items } from './links-desktop.test';

describe('HeaderLinksMobile', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(HeaderLinksMobile, {
      stubs: ['header-login', 'ui-icon'],
      propsData: {
        items,
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.header-links-mobile').exists()).toBe(true);
  });
});
