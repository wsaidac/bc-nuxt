import Vuex from 'vuex';
import Context from '~/store/context';
import Menus from '~/store/menus';
import Shared from '~/store/shared';
import Ui from '~/store/ui';


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
    },
    ui: {
      namespaced: true,
      ...Ui,
    }
  }
});

export default store
