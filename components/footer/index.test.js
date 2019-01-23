import Footer from './index.vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Shared from '~/store/shared';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Footer', () => {
  let $mounted;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        shared: {
          namespaced: true,
          getters: Shared.getters,
        },
      },
    });

    $mounted = shallowMount(Footer, {
      stubs: ['nuxt-link', 'footer-links'],
      store,
      localVue,
    });
  });

  it('should mount', () => {
    expect($mounted.find('.rapido-footer').exists()).toBe(true);
  });
});
