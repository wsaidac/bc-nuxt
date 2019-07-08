import Vue from 'vue';
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);

export default ({ app, store }) => Promise.all(Object.entries({ user: 'User' }).map(async ([name, model]) => {
  const { data: { data } } = await app.$query('introspectModel', { model });
  store.commit('introspection/setModel', { name, data });
}));
