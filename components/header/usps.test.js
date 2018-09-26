import HeaderUsps from './usps.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderUsps', () => {
  it('should mount', () => {
    const $mounted = mount(HeaderUsps, { propsData: { usps: [{ icon: 'clock', label: 'Order in Minutes' }] } });
    expect($mounted.find('.header-usps').exists()).toBe(true);
  });

  it('should hide if no usps given', () => {
    const $mounted = mount(HeaderUsps);
    expect($mounted.find('.header-usps').exists()).toBe(false);
  });

  it('should iterate through multiple usps', () => {
    const $mounted = mount(HeaderUsps, {
      propsData: {
        usps: [
          { icon: 'clock', label: 'Order in Minutes' },
          { icon: 'lock', label: 'Pay safely & securely' },
          { icon: 'envelope', label: 'Get your code instantly' },
        ],
      },
    });
    expect($mounted.findAll('.header-usps__item')).toHaveLength(3);
  });
});
