import CategoryProducts from './products.vue';
import { mount } from '~/test/utils/with-context';

describe('CategoryProducts', () => {
  let $mounted;

  beforeEach(() => {
    $mounted = mount(CategoryProducts, { propsData: {
      products: [
        {
          id: 2,
          price: '$15.00',
          title: 'Verizon Prepaid Refill $10',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 3,
          price: '$20.00',
          title: 'Verizon Prepaid Refill $15',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 4,
          price: '$25.00',
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/categories/2098/xbox_logo_09.png?1538569956',
        },
        {
          id: 5,
          price: '$25.00',
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
        },
        {
          id: 6,
          price: '$25.00',
          title: 'Verizon Prepaid Refill $20',
          imageUrl: 'https://static.rapido.com/media/topup/rapido/default/images/most-popular/playstation-gift-card.png',
        },
      ],
    },
    stubs: ['ui-select'], });
  });

  it('should mount with a class of category-products', () => {
    expect($mounted.find('.category-products').exists()).toBe(true);
  });
});
