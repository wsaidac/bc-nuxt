import HeaderUsps from './usps.vue';
import { mount } from '~/test/utils/with-context';

describe('HeaderUsps', () => {
  it('should mount', () => {
    const $mounted = mount(HeaderUsps, { propsData: { usps: [{ image: { sourceUrl: '/clock.png' }, text: 'Order in Minutes' }] } });
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
          { image: { sourceUrl: '/clock.png' }, text: 'Order in Minutes' },
          { image: { sourceUrl: '/lock.png' }, text: 'Pay safely & securely' },
          { image: { sourceUrl: '/envelope.png' }, text: 'Get your code instantly' },
        ],
      },
    });
    expect($mounted.findAll('.header-usps__item')).toHaveLength(3);
  });
});
