import HeaderHamburger from './hamburger.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderHamburger', () => {
  it('should mount', () => {
    const $mounted = mount(HeaderHamburger);
    expect($mounted.find('.hamburger').exists()).toBe(true);
  });

  it('should be set to inactive', () => {
    const $mounted = mount(HeaderHamburger, { propsData: { active: false } });
    expect($mounted.find('.is-active').exists()).toBe(false);
  });

  it('can be set to active', () => {
    const $mounted = mount(HeaderHamburger, { propsData: { active: true } });
    expect($mounted.find('.is-active').exists()).toBe(true);
  });
});
