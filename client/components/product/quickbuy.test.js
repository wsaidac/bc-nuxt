import ProductQuickbuy from './quickbuy.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductQuickbuy', () => {
  let $mounted;

  const defaultProduct = {
    categories: {
      nodes: [
        {
          categoryHeader: {
            title: 'Title',
          },
        },
      ],
    },
    kinds: {
      nodes: [
        {
          name: 'call-credit',
        },
      ],
    },
    id: 1,
    rapidoProduct: {
      id: 1,
    },
    information: {
      issueValue: 5.0,
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
  };

  beforeEach(() => {
    $mounted = mount(ProductQuickbuy, {
      stubs: ['product-card', 'product-variants'],
      propsData: {
        defaultProduct,
      },
      computed: {
        isLoaded() {
          return false;
        },
        userProduct() {
          return false;
        },
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.product-quickbuy').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-quickbuy__title').exists()).toBe(true);
  });
});
