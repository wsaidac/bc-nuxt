import Vuex from 'vuex';
import Context from '~/store/context';


const store = new Vuex.Store({
  modules: {
    context: {
      namespaced: true,
      ...Context,
    },
  }
});

export default store
