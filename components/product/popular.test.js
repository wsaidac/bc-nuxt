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
          },
        },
      },
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
          },
        },
      },
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
          },
        },
      },
    },
  ];

  beforeEach(() => {
    $mounted = mount(ProductPopular, {
      propsData: {
        popularProducts: {
          items: products,
          title: 'awesome title',
          subtitle: 'awesome subtitle',
        },
      },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.product-popular').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-popular__title').exists()).toBe(true);
    expect($mounted.find('.product-popular__title').text()).toBe(
      'awesome title',
    );
  });

  it('should render a subtitle', () => {
    expect($mounted.find('.product-popular__subtitle').exists()).toBe(true);
    expect($mounted.find('.product-popular__subtitle').text()).toBe(
      'awesome subtitle',
    );
  });

  it('should iterate through multiple products', () => {
    expect($mounted.findAll('.product-popular__item')).toHaveLength(3);
  });
});
