import ProductCard from './card.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductCard', () => {
  let $mounted;

  const product = {
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
    categories: {
      nodes: [
        {
          id: 3,
          slug: '/verizon/10-usd',
          categoryHeader: {
            title: 'Spotify',
            image: {
              regular: 'https://example.com/spotify.jpg',
              retina: 'https://example.com/spotify.jpg',
            },
          },
        },
      ],
    },
    slug: '/product123',
  };

  beforeEach(() => {
    $mounted = mount(ProductCard, { propsData: { product } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-card').exists()).toBe(true);
  });

  it('should render an image', () => {
    expect($mounted.contains('img')).toBe(true);
  });
});
