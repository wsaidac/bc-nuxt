/*
  Wrapped vue-test-utils API methods with prefilled mounting options setup with:
  - nuxt-link component stub
*/

import Vue from 'vue';
import TestUtils from '@vue/test-utils';

const localVue = TestUtils.createLocalVue();

// Silence $listeners readonly error: https://github.com/vuejs/vue-test-utils/issues/532
Vue.config.silent = true;

// Mock i18n helper and stub NuxtLink component
const defaultOptions = {
  stubs: {
    NuxtLink: TestUtils.RouterLinkStub,
  },
  localVue,
};

// Wrap vue-test-utils methods with default mounting options
const wrap = method => (component, options) => TestUtils[method](component, Object.assign({}, defaultOptions, options));

export const mount = wrap('mount');
export const shallowMount = wrap('shallowMount');
export const render = wrap('render');
export const renderToString = wrap('renderToString');
