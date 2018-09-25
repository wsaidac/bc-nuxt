import ProductQuickbuy from './quickbuy.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductQuickbuy', () => {
  let $mounted;

  const product = {
    id: 1,
    title: 'Verizon Prepaid Refill $5',
    price: {
      amount: 5.0,
      currency: 'USD',
    },
    imageUrl: 'https://example.com/xbox.jpg',
  };

  const related = [
    { id: 2, title: 'Verizon Prepaid Refill $10', url: '/verizon/10-usd' },
    { id: 3, title: 'Verizon Prepaid Refill $15', url: '/verizon/15-usd' },
    { id: 4, title: 'Verizon Prepaid Refill $20', url: '/verizon/20-usd' },
  ];

  beforeEach(() => {
    $mounted = mount(ProductQuickbuy, { propsData: { product, related } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-quickbuy').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-quickbuy__title').exists()).toBe(true);
  });

  it('should render a highlighted product with title', () => {
    expect($mounted.find('.product-quickbuy__highlight').text()).toContain('Verizon Prepaid Refill $5');
  });

  it('should iterate through multiple denominations', () => {
    expect($mounted.findAll('.product-quickbuy__related-item')).toHaveLength(3);
  });
});
