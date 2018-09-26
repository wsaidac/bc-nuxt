import ProductPopular from './popular.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductPopular', () => {
  let $mounted;

  const products = [
    {
      id: 1,
      title: 'Xbox',
      imageUrl: 'https://example.com/xbox.jpg',
      url: '/xbox',
    },
    {
      id: 2,
      title: 'Playstation',
      imageUrl: 'https://example.com/playstation.jpg',
      url: '/playstation',
    },
    {
      id: 3,
      title: 'Spotify',
      imageUrl: 'https://example.com/spotify.jpg',
      url: '/spotify',
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
