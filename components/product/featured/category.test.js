import ProductCategory from './category.vue';
import { mount } from '~/test/utils/with-context';

describe('ProductCategory', () => {
  let $mounted;

  const category = {
    title: 'Mobile Recharge',
    icon: 'mobile',
    image: {
      regular: 'https://example.com/provider-1.jpg',
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
      {
        id: 5,
        title: 'Provider 1',
        url: '/provider-1',
        image: {
          regular: 'https://example.com/provider-4.jpg',
          retina: 'https://example.com/provider-4.jpg',
        },
      },
      {
        id: 6,
        title: 'Provider 1',
        url: '/provider-1',
        image: {
          regular: 'https://example.com/provider-4.jpg',
          retina: 'https://example.com/provider-4.jpg',
        },
      },
      {
        id: 7,
        title: 'Provider 1',
        url: '/provider-1',
        image: {
          regular: 'https://example.com/provider-4.jpg',
          retina: 'https://example.com/provider-4.jpg',
        },
      },
    ],
  };

  beforeEach(() => {
    $mounted = mount(ProductCategory, { propsData: { category } });
  });

  it('should mount', () => {
    expect($mounted.find('.product-featured-category').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-featured-category__title').exists()).toBe(
      true,
    );
  });

  it('should have length of 4', () => {
    expect($mounted.findAll('.product-featured-category__item')).toHaveLength(
      6,
    );
  });

  it('should uncollapse products within category on toggle', () => {
    const firstCategory = $mounted.find('.product-featured-category');
    firstCategory.find('.product-featured-category__toggle').trigger('click');
    expect(
      $mounted
        .find('.product-featured-category')
        .findAll('.product-featured-category__item'),
    ).toHaveLength(7);
  });

  it('should have one not showing product', () => {
    expect($mounted.vm.productsRest).toHaveLength(1);
  });

  it('should change text on toggle', () => {
    const showMoreButton = $mounted.find('.product-featured-category__toggle');
    expect(showMoreButton.text()).toEqual('Show more');
    showMoreButton.find('.product-featured-category__toggle').trigger('click');
    expect(showMoreButton.text()).toEqual('Show less');
  });
});
