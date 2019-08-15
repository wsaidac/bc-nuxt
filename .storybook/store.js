import Vuex from 'vuex';
import Context from '~/store/context';
import Menus from '~/store/menus';
import Shared from '~/store/shared';


const store = new Vuex.Store({
  modules: {
    context: {
      namespaced: true,
      ...Context,
    },
    menus: {
      namespaced: true,
      ...Menus,
    },
    shared: {
      namespaced: true,
      ...Shared,
    }
  }
});

export default store
