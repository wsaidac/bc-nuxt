import ProductQuickbuy from './quickbuy.vue';
import { mount } from '~/test/utils/with-context';
import Vuex from 'vuex';
import Async from '~/store/async';
import Auth from '~/store/auth';

describe('ProductQuickbuy', () => {
  let $mounted;
  let store;

  const defaultProduct = {
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
    slug: '/product123',
    title: 'title',
    categories: {
      nodes: [{
        products: {
          nodes: [
            {
              id: 2,
              content: {
                title: 'Verizon Prepaid Refill $10',
              },
              url: '/verizon/10-usd',
            },
            {
              id: 3,
              content: {
                title: 'Verizon Prepaid Refill $15',
              },
              url: '/verizon/15-usd',
            },
            {
              id: 4,
              content: {
                title: 'Verizon Prepaid Refill $20',
              },
              url: '/verizon/20-usd',
            },
          ],
        },
      }],
    },
  };

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        auth: {
          namespaced: true,
          state: {
            currentUser: {
              quickbuy: defaultProduct,
            },
          },
          getters: Auth.getters,
        },

        async: {
          namespaced: true,
          state: { loaded: true },
          getters: Async.getters,
        },
      },
    });

    $mounted = mount(ProductQuickbuy, {
      stubs: ['product-card', 'product-variants'],
      store,
      propsData: { defaultProduct },
    });
  });

  it('should mount', () => {
    expect($mounted.find('.product-quickbuy').exists()).toBe(true);
  });

  it('should render a title', () => {
    expect($mounted.find('.product-quickbuy__title').exists()).toBe(true);
  });
});
