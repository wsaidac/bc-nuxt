import { merge } from 'lodash';
import ProductCard from './card.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductCard', () => {
  let $mounted;

  const props = {
    product: {
      title: 'Verizon Prepaid Refill $5',
      rapidoProduct: {
        id: 1,
      },
      information: {
        issueValue: 5.0,
      },
      content: {
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
      categories: {
        nodes: [
          {
            categoryHeader: {
              image: 'fakeLink',
            },
          },
        ],
      },
    },
  };

  const localMount = (extraProps = {}) => {
    const extendedProps = merge({}, props, extraProps);
    $mounted = mount(ProductCard, {
      stubs: ['shared-instant-tooltip'],
      propsData: extendedProps,
    });
  };

  it('should mount', () => {
    localMount();
    expect($mounted.find('.product-card').exists()).toBe(true);
  });

  // test horizontal productCard (bij product card)
  it('should mount in horizontal mode', () => {
    localMount({ mode: 'horizontal' });
    expect($mounted.find('.product-card').exists()).toBe(true);
  });

  it('should render a button with "Order now" in horizontal mode', () => {
    localMount({ mode: 'horizontal' });
    expect($mounted.find('button').text()).toBe('general.order-now');
  });

  it('should render a button with "Order safely" in vertical mode', () => {
    localMount({ mode: 'horizontal' });
    expect($mounted.find('button').text()).toBe('general.order-now');
  });

  it('should render an image', () => {
    localMount();
    expect($mounted.contains('img')).toBe(true);
  });
});
