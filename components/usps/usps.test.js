import CgUsps from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('CgUsps', () => {
  const usps = [
    {
      image: { sourceUrl: '/clock.png' },
      text: 'Order in Minutes',
      description: 'Simply choose the product and amount you need',
    },
    {
      image: { sourceUrl: '/lock.png' },
      text: 'Pay safely & securely',
    },
    {
      image: { sourceUrl: '/envelope.png' },
      text: 'Get your code instantly',
    },
  ];

  it('should mount', () => {
    const $mounted = mount(CgUsps, { propsData: { usps } });
    expect($mounted.find('.cg-usps').exists()).toBe(true);
  });

  it('should hide if no usps given', () => {
    const $mounted = mount(CgUsps);
    expect($mounted.find('.cg-usps').exists()).toBe(false);
  });

  it('should iterate through multiple usps', () => {
    const $mounted = mount(CgUsps, { propsData: { usps } });
    expect($mounted.findAll('.cg-usps__item')).toHaveLength(3);
  });

  it('should mount horizontal by default', () => {
    const $mounted = mount(CgUsps, { propsData: { usps } });
    expect($mounted.find('.cg-usps').classes()).toContain('cg-usps--mode-horizontal');
  });

  it('should not display description in horizontal mode', () => {
    const $mounted = mount(CgUsps, { propsData: { usps, mode: 'horizontal' } });
    expect($mounted.find('.cg-usps__item small').exists()).toBe(false);
  });

  it('should display description in vertical mode', () => {
    const $mounted = mount(CgUsps, { propsData: { usps, mode: 'vertical' } });
    expect($mounted.find('.cg-usps__item small').exists()).toBe(true);
  });
});
