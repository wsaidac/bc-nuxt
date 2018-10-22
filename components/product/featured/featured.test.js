import ProductFeatured from './index.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductFeatured', () => {
  let $mounted;

  const categories = [
    {
      title: 'Mobile Recharge',
      icon: 'mobile',
      categories: [
        {
          id: 1, title: 'Provider 1', imageUrl: 'https://example.com/provider-1.jpg', url: '/provider-1',
        },
        {
          id: 2, title: 'Provider 2', imageUrl: 'https://example.com/provider-2.jpg', url: '/provider-2',
        },
        {
          id: 3, title: 'Provider 3', imageUrl: 'https://example.com/provider-3.jpg', url: '/provider-3',
        },
        {
          id: 4, title: 'Provider 4', imageUrl: 'https://example.com/provider-4.jpg', url: '/provider-4',
        },
      ],
    },
    {
      title: 'Game Gift cards',
      icon: 'game',
      categories: [
        {
          id: 5, title: 'Playstation', imageUrl: 'https://example.com/playstation.jpg', url: '/playstation',
        },
        {
          id: 6, title: 'Xbox', imageUrl: 'https://example.com/xbox.jpg', url: '/xbox',
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
    expect(firstCategory.findAll('.product-featured-category__item')).toHaveLength(2);
  });

  it('should uncollapse products within category on toggle', () => {
    const firstCategory = $mounted.find('.product-featured-category');
    firstCategory.find('.product-featured-category__toggle').trigger('click');
    expect($mounted.find('.product-featured-category').findAll('.product-featured-category__item')).toHaveLength(4);
  });

  it('should hide toggle if product limit is not met', () => {
    const secondCategory = $mounted.find('.product-featured-category:last-child');
    expect(secondCategory.find('.product-featured-category__toggle').exists()).toBe(false);
  });
});
