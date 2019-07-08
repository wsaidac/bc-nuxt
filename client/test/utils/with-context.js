/*
  Wrapped vue-test-utils API methods with prefilled mounting options setup with:
  - nuxt-link component stub
*/

import { merge } from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuelidate from 'vuelidate';
import TestUtils from '@vue/test-utils';
import introspection from '~/store/introspection';

const localVue = TestUtils.createLocalVue();
localVue.use(Vuex);

// Silence $listeners readonly error: https://github.com/vuejs/vue-test-utils/issues/532
Vue.config.silent = true;

// Hydrate Vuex instrospection store with validations for Vuelidate
localVue.use(Vuelidate);
localVue.use(Vuex);
Object.assign(introspection, { namespaced: true });
const store = new Vuex.Store({ modules: { introspection } });

store.commit('introspection/setModel', {
  name: 'user',
  data: {
    attributes: [
      {
        name: 'email',
        validations: [{ validator: 'presence', options: [] }],
      },
      {
        name: 'password',
        validations: [
          { validator: 'presence', options: [] },
          { validator: 'length', options: [{ key: 'minimum', value: '10' }] },
        ],
      },
      {
        name: 'passwordConfirmation',
        validations: [{ validator: 'presence', options: [] }],
      },
      {
        name: 'unconfirmedEmail',
        validations: [{ validator: 'presence', options: [] }],
      },
      {
        name: 'unconfirmedEmailConfirmation',
        validations: [{ validator: 'presence', options: [] }],
      },
    ],
  },
});

// Mock i18n helper and stub NuxtLink component
const defaultOptions = {
  mocks: {
    $d: key => key,
    $n: key => key,
    $track: key => key,
    $t: key => key,
    $contextPath: key => key,
    localePath: key => key,
    $mutation: key => key,
  },
  stubs: {
    NuxtLink: TestUtils.RouterLinkStub,
  },
  store,
  localVue,
};

// Wrap vue-test-utils methods with default mounting options
const wrap = method => (component, options) => TestUtils[method](component, merge({}, defaultOptions, options));

export const mount = wrap('mount');
export const shallowMount = wrap('shallowMount');
export const render = wrap('render');
export const renderToString = wrap('renderToString');
