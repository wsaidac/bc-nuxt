import CategoryAccordion from './accordion.vue';
import { mount } from '~/test/utils/with-context';

describe('CategoryAccordion', () => {
  let $mounted;

  const propsData = {
    slides: [
      {
        question: 'question',
        answer: 'answer',
      },
    ],
    usps: [
      { image: { sourceUrl: '/clock.png' }, text: 'Order in Minutes', description: 'Simply choose the product and amount you need' },
      { image: { sourceUrl: '/lock.png' }, text: 'Pay safely & securely' },
      { image: { sourceUrl: '/envelope.png' }, text: 'Get your code instantly' },
    ],
  };

  beforeEach(() => {
    $mounted = mount(CategoryAccordion, { propsData });
  });

  it('should mount', () => {
    expect($mounted.find('.category-accordion').exists()).toBe(true);
  });
});
