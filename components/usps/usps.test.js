import CgUsps from './usps.vue';
import { mount } from '~/test/utils/with-context';

describe('CgUsps', () => {
  it('should mount', () => {
    const $mounted = mount(CgUsps, { propsData: { usps: [{ image: { sourceUrl: '/clock.png' }, text: 'Order in Minutes' }] } });
    expect($mounted.find('.cg-usps').exists()).toBe(true);
  });

  it('should hide if no usps given', () => {
    const $mounted = mount(CgUsps);
    expect($mounted.find('.cg-usps').exists()).toBe(false);
  });

  it('should iterate through multiple usps', () => {
    const $mounted = mount(CgUsps, {
      propsData: {
        usps: [
          { image: { sourceUrl: '/clock.png' }, text: 'Order in Minutes' },
          { image: { sourceUrl: '/lock.png' }, text: 'Pay safely & securely' },
          { image: { sourceUrl: '/envelope.png' }, text: 'Get your code instantly' },
        ],
      },
    });
    expect($mounted.findAll('.cg-usps__item')).toHaveLength(3);
  });
});
