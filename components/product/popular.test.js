import { mount } from '~/test/utils/with-context';
// import NuxtLink from '../../.nuxt/components/nuxt-link';
import { RouterLinkStub } from '@vue/test-utils';
import { merge } from 'lodash';

import ProductPopular from './popular.vue';

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
      image: {
        regular: 'https://example.com/xbox.jpg',
        retina: 'https://example.com/xbox.jpg',
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
      image: {},
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
      image: {},
    },
  ];

  const localMount = (extraData = []) => {
    const newProducts = merge(products, extraData);
    $mounted = mount(ProductPopular, {
      propsData: { popularProducts: { items: newProducts } },
    });
  };

  it('should mount', () => {
    localMount();
    expect($mounted.find('.product-popular').exists()).toBe(true);
  });

  it('should render a title', () => {
    localMount();
    expect($mounted.find('.product-popular__title').exists()).toBe(true);
  });

  it('should render a subtitle', () => {
    expect($mounted.find('.product-popular__subtitle').exists()).toBe(true);
  });

  it('should iterate through multiple products', () => {
    localMount();
    expect($mounted.findAll('.product-popular__item')).toHaveLength(3);
  });

  it('should iterate through multiple products when images are missing', () => {
    localMount([
      {
        category: {
          id: 1,
          slug: '/verizon/10-usd',
          categoryHeader: {
            title: 'Xbox',
          },
        },
      },
      {
        category: {
          id: 2,
          slug: '/verizon/10-usd',
          categoryHeader: {
            title: 'Playstation',
          },
        },
      },
    ]);
    expect($mounted.findAll('.product-popular__item')).toHaveLength(3);
  });

  it('should iterate through multiple products when images ánd title are missing', () => {
    localMount([
      {
        category: {
          id: 1,
          slug: '/verizon/10-usd',
          categoryHeader: null,
        },
      },
      {
        category: {
          id: 2,
          slug: '/verizon/10-usd',
          categoryHeader: null,
        },
      },
    ]);
    expect($mounted.findAll('.product-popular__item')).toHaveLength(3);
  });

  it('should have a link with a "to" attribute', () => {
    expect($mounted.find(RouterLinkStub).props().to).toBe('/verizon/10-usd');
  });
});
