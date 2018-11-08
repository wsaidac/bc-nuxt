import Footer from './index.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Shared from '~/store/shared';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Footer', () => {
  let $mounted;
  let state;
  let store;

  beforeEach(() => {
    state = [
      {
        name: 'Visa',
        image: {
          regular: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143119/7FUuxSdyoIrLuNzNATz7CO/mastercard.png',
          retina: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143119/Ia8FjnT1WjObEO6tGuR4d/mastercard.png',
        },
      },
      {
        name: 'Maestro',
        image: {
          regular: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143119/7FUuxSdyoIrLuNzNATz7CO/mastercard.png',
          retina: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143119/Ia8FjnT1WjObEO6tGuR4d/mastercard.png',
        },
      },
      {
        name: 'American Express',
        image: {
          regular: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143119/7FUuxSdyoIrLuNzNATz7CO/mastercard.png',
          retina: 'http://d2ethx2wadout7.cloudfront.net/app/uploads/2018/10/23143119/Ia8FjnT1WjObEO6tGuR4d/mastercard.png',
        },
      },
    ];

    store = new Vuex.Store({
      modules: {
        shared: {
          namespaced: true,
          state,
          getters: Shared.getters,
        },
      },
    });

    $mounted = shallowMount(Footer, {
      stubs: ['nuxt-link'],
      store,
      localVue,
    });
  });

  it('should mount', () => {
    expect($mounted.find('.rapido-footer').exists()).toBe(true);
  });
});
