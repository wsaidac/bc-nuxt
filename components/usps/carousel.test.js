import UspsCarousel from './carousel.vue';
import { mount } from '~/test/utils/with-context';

describe('UspsCarousel', () => {
  const usps = [
    { image: { sourceUrl: '/clock.png' }, text: 'Order in Minutes', description: 'Simply choose the product and amount you need' },
    { image: { sourceUrl: '/lock.png' }, text: 'Pay safely & securely' },
    { image: { sourceUrl: '/envelope.png' }, text: 'Get your code instantly' },
  ];

  it('should mount', () => {
    const $mounted = mount(UspsCarousel, { propsData: { usps } });
    expect($mounted.find('.ui-carousel').exists()).toBe(true);
  });
});
