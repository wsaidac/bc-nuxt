import ProductInstantTooltipWrapper from './instant-tooltip-wrapper.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Shared from '~/store/shared';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ProductInstantTooltipWrapper', () => {
  let $mounted;

  let state;
  let store;

  beforeEach(() => {
    state = {
      instantDelivery: {
        title: 'instant title',
        tooltip: 'instant tooltip',
      },
    };

    store = new Vuex.Store({
      modules: {
        shared: {
          namespaced: true,
          state,
          getters: Shared.getters
        },
      },
    });

    $mounted = mount(ProductInstantTooltipWrapper, { store, localVue });
  });

  it('should mount', () => {
    expect($mounted.find('.product-instant-tooltip').exists()).toBe(true);
  });

  it('should have a computed property "message"', () => {
    expect($mounted.vm.message).toBe('instant title');
  });

  it('should have a computed property "content"', () => {
    expect($mounted.vm.content).toBe('instant tooltip');
  });
});
