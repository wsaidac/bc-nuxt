import ProductPopular from './popular.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductPopular', () => {
  let $mounted;

  const products = [
    {
      category: {
        id: 1,
        slug: '/verizon/10-usd',
        categoryHeader: {
          title: 'Xbox',
          image: {
            regular: 'https://example.com/xbox.jpg',
            retina: 'https://example.com/xbox.jpg',
          }
        }
      }
    },
    {
      category: {
        id: 2,
        slug: '/verizon/10-usd',
        categoryHeader: {
          title: 'Playstation',
          image: {
            regular: 'https://example.com/playstation.jpg',
            retina: 'https://example.com/playstation.jpg',
          }
        }
      }
    },
    {
      category: {
        id: 3,
        slug: '/verizon/10-usd',
        categoryHeader: {
          title: 'Spotify',
          image: {
            regular: 'https://example.com/spotify.jpg',
            retina: 'https://example.com/spotify.jpg',
          }
        }
      }
    },
  ];

  beforeEach(() => {
    $mounted = mount(ProductPopular, { propsData: { products } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-popular').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-popular__title').exists()).toBe(true);
  });

  it('should iterate through multiple products', () => {
    expect($mounted.findAll('.product-popular__item')).toHaveLength(3);
  });
});
