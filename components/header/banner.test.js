import HeaderBanner from './banner.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderBanner', () => {
  it('should mount with an image', () => {
    const $mounted = mount(HeaderBanner, { propsData: { imageUrl: 'https://example.com/banner.jpg' } });
    expect($mounted.find('.header-banner').exists()).toBe(true);
  });

  it('should omit payoff if not given', () => {
    const $mounted = mount(HeaderBanner, { propsData: { imageUrl: 'https://example.com/banner.jpg' } });
    expect($mounted.find('.header-banner__payoff-text').exists()).toBe(false);
    expect($mounted.find('.header-banner__payoff-image').exists()).toBe(false);
  });

  it('should mount a text payoff', () => {
    const $mounted = mount(HeaderBanner, {
      propsData: {
        imageUrl: 'https://example.com/banner.jpg',
        payoffText: '<p>Foo</p>',
      },
    });
    expect($mounted.find('.header-banner__payoff-text').text()).toContain('Foo');
  });

  it('should mount an image payoff', () => {
    const $mounted = mount(HeaderBanner, {
      propsData: {
        imageUrl: 'https://example.com/banner.jpg',
        payoffImage: 'https://example.com/logo.png',
      },
    });
    expect($mounted.find('.header-banner__payoff-image img').exists()).toBe(true);
  });
});
