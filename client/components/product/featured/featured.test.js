import ProductFeatured from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductFeatured', () => {
  let $mounted;

  const categories = [
    {
      title: 'Mobile Recharge',
      icon: 'mobile',
      image: {
        regular: 'https://example.com/provider-1.jpg',
        retina: 'https://example.com/provider-1.jpg',
      },
      categories: [
        {
          id: 1,
          title: 'Provider 1',
          url: '/provider-1',
          image: {
            regular: 'https://example.com/provider-1.jpg',
            retina: 'https://example.com/provider-1.jpg',
          },
        },
        {
          id: 2,
          title: 'Provider 1',
          url: '/provider-1',
          image: {
            regular: 'https://example.com/provider-2.jpg',
            retina: 'https://example.com/provider-2.jpg',
          },
        },
        {
          id: 3,
          title: 'Provider 1',
          url: '/provider-1',
          image: {
            regular: 'https://example.com/provider-3.jpg',
            retina: 'https://example.com/provider-3.jpg',
          },
        },
        {
          id: 4,
          title: 'Provider 1',
          url: '/provider-1',
          image: {
            regular: 'https://example.com/provider-4.jpg',
            retina: 'https://example.com/provider-4.jpg',
          },
        },
      ],
    },
    {
      title: 'Game Gift cards',
      icon: 'game',
      image: {
        regular: 'https://example.com/provider-1.jpg',
        retina: 'https://example.com/provider-1.jpg',
      },
      categories: [
        {
          id: 5,
          title: 'Provider 1',
          url: '/provider-1',
          image: {
            regular: 'https://example.com/provider-1.jpg',
            retina: 'https://example.com/provider-1.jpg',
          },
        },
        {
          id: 6,
          title: 'Provider 1',
          url: '/provider-1',
          image: {
            regular: 'https://example.com/provider-2.jpg',
            retina: 'https://example.com/provider-2.jpg',
          },
        },
      ],
    },
  ];

  beforeEach(() => {
    $mounted = mount(ProductFeatured, { propsData: { categories, limit: 2 } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-featured').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-featured__title').exists()).toBe(true);
  });

  it('should iterate through multiple categories', () => {
    expect($mounted.findAll('.product-featured-category')).toHaveLength(2);
  });

  it('should collapse products within category', () => {
    const firstCategory = $mounted.find('.product-featured-category');
    expect(
      firstCategory.findAll('.product-featured-category__item'),
    ).toHaveLength(2);
  });

  it('should uncollapse products within category on toggle', () => {
    const firstCategory = $mounted.find('.product-featured-category');
    firstCategory.find('.product-featured-category__toggle').trigger('click');
    expect(
      $mounted
        .find('.product-featured-category')
        .findAll('.product-featured-category__item'),
    ).toHaveLength(4);
  });

  it('should hide toggle if product limit is not met', () => {
    const secondCategory = $mounted.find(
      '.product-featured-category:last-child',
    );
    expect(
      secondCategory.find('.product-featured-category__toggle').exists(),
    ).toBe(false);
  });
});
