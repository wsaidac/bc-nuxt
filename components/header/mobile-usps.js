import HeaderMobileUsps from './mobile-usps.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderMobileUsps', () => {
  it('should mount', () => {
    const $mounted = mount(HeaderMobileUsps, { propsData: { usps: [
      { icon: 'clock', label: 'Order in Minutes', image: { sourceUrl: '#' } }
    ] } });
    expect($mounted.find('.main-carousel').exists()).toBe(true);
  });

  it('should hide if no usps given', () => {
    const $mounted = mount(HeaderMobileUsps);
    expect($mounted.find('.main-carousel').exists()).toBe(false);
  });

  it('should iterate through multiple usps', () => {
    const $mounted = mount(HeaderMobileUsps, {
      propsData: {
        usps: [
          { icon: 'clock', label: 'Order in Minutes', image: { sourceUrl: '#' } },
          { icon: 'lock', label: 'Pay safely & securely', image: { sourceUrl: '#' } },
          { icon: 'envelope', label: 'Get your code instantly', image: { sourceUrl: '#' } },
        ],
      },
    });
    expect($mounted.findAll('.cell')).toHaveLength(3);
  });
});
