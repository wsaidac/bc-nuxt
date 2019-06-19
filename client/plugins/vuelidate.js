import Vue from 'vue';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

export default ({ app, store }) => Promise.all(Object.entries({ user: 'User' }).map(async ([name, model]) => {
  const { data } = await app.$q('introspectModel', { model });
  store.commit('introspection/setModel', { name, data });
}));
