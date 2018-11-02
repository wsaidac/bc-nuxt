import ProductVariants from './variants.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductVariants', () => {
  let $mounted;

  const variants = [
    { id: 2,
      content: {
        title: 'Verizon Prepaid Refill $10',
      },
      url: '/verizon/10-usd'
    },
    { id: 3,
      content: {
        title: 'Verizon Prepaid Refill $15',
      },
      url: '/verizon/15-usd'
    },
    { id: 4,
      content: {
        title: 'Verizon Prepaid Refill $20',
      },
      url: '/verizon/20-usd'
    },
  ];

  beforeEach(() => {
    $mounted = mount(ProductVariants, { propsData: { variants } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-variants').exists()).toBe(true);
  });

  it('should iterate through multiple denominations', () => {
    expect($mounted.findAll('.product-variants__item')).toHaveLength(3);
  });
});
