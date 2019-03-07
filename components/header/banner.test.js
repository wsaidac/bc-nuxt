import HeaderBanner from './banner.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderBanner', () => {
  it('should mount with an image', () => {
    const $mounted = mount(HeaderBanner, {
      propsData: {
        post: {},
        header: {
          image: { desktop: 'https://example.com/banner.jpg', mobile: 'https://example.com/banner.jpg' },
        },
      },
    });
    expect($mounted.find('.header-banner').exists()).toBe(true);
  });

  it('should mount a text payoff', () => {
    const $mounted = mount(HeaderBanner, {
      propsData: {
        image: { desktop: 'https://example.com/banner.jpg', mobile: 'https://example.com/banner.jpg' },
        post: { header: { titlePart1: 'Foo' } },
        header: {
          titlePart1: 'Foo',
        },
      },
    });
    expect($mounted.find('.header-banner__payoff-text-content p').text()).toContain('Foo');
  });

  it('should mount an image payoff', () => {
    const $mounted = mount(HeaderBanner, {
      propsData: {
        image: { desktop: 'https://example.com/banner.jpg', mobile: 'https://example.com/banner.jpg' },
        payoffImage: { regular: 'https://example.com/logo.png', retina: 'https://example.com/logo-2x.png' },
        post: {},
        header: {
          image: {
            regular: 'https://via.placeholder.com/150',
          },
        },
      },
    });
    expect($mounted.find('.header-banner__payoff-image img').exists()).toBe(true);
  });
});
