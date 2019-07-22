import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SharedInstantTooltip from './instant-tooltip.vue';
import Shared from '~/store/shared';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('SharedInstantTooltip', () => {
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
          getters: Shared.getters,
        },
      },
    });

    $mounted = mount(SharedInstantTooltip, { store, localVue });
  });

  it('should mount', () => {
    expect($mounted.find('.shared-tooltip').exists()).toBe(true);
  });

  it('should have a computed property "title"', () => {
    expect($mounted.vm.title).toBe('instant title');
  });

  it('should have a computed property "content"', () => {
    expect($mounted.vm.content).toBe('instant tooltip');
  });
});
