import HeaderBanner from './banner.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderBanner', () => {
  it('should mount with an image', () => {
    const $mounted = mount(HeaderBanner, { propsData: { imageUrl: 'https://example.com/banner.jpg' } });
    expect($mounted.find('.header-banner').exists()).toBe(true);
  });

  it('should omit payoff if not given', () => {
    const $mounted = mount(HeaderBanner, { propsData: { imageUrl: 'https://example.com/banner.jpg' } });
    expect($mounted.find('.header-banner__payoff').exists()).toBe(false);
  });

  it('should mount a payoff', () => {
    const $mounted = mount(HeaderBanner, {
      propsData: {
        imageUrl: 'https://example.com/banner.jpg',
        payoff: '<p>Foo</p>',
      },
    });
    expect($mounted.find('.header-banner__payoff').text()).toContain('Foo');
  });
});
