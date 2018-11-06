import ProductQuickbuy from './quickbuy.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductQuickbuy', () => {
  let $mounted;

  const defaultProduct = {
    id: 1,
    information: {
      retailValue: 5.0,
      currency: 'USD',
    },
    content: {
      title: 'Verizon Prepaid Refill $5',
      image: {
        desktop: 'https://example.com/xbox.jpg',
        mobile: 'https://example.com/xbox.jpg',
      },
      tooltip: {
        content: 'Long text to show when tooltip is hovered',
        title: 'Short text to show when tooltip is not yet hovered',
      },
    },
    slug: '/product123',
    title: 'title',
    categories: {
      nodes: [{
        products: {
          nodes: [
            {
              id: 2,
              content: {
                title: 'Verizon Prepaid Refill $10',
              },
              url: '/verizon/10-usd',
            },
            {
              id: 3,
              content: {
                title: 'Verizon Prepaid Refill $15',
              },
              url: '/verizon/15-usd',
            },
            {
              id: 4,
              content: {
                title: 'Verizon Prepaid Refill $20',
              },
              url: '/verizon/20-usd',
            },
          ],
        },
      }],
    },
  };

  beforeEach(() => {
    $mounted = mount(ProductQuickbuy, { propsData: { defaultProduct } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-quickbuy').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-quickbuy__title').exists()).toBe(true);
  });

  it('should render a product card with title', () => {
    expect($mounted.find('.product-card').text()).toContain('Verizon Prepaid Refill $5');
  });

  it('should iterate through multiple denominations', () => {
    expect($mounted.findAll('.product-variants__item')).toHaveLength(3);
  });
});
