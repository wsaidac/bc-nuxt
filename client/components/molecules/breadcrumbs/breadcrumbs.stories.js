/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import BreadCrumbs from './index.vue';
import { info } from '~~/.storybook/utils';


// definition
Vue.component('breadcrumbs', BreadCrumbs);

// stories
storiesOf('Molecules/Breadcrumb', module)
  .add('default', () => ({
    template: `<breadcrumbs />`,
  }), info)
  .add(':invertColor', () => ({
    template: `<breadcrumbs invertColor />`,
  }), {
    info: {},
    backgrounds: [{ name: 'black', color: '#444', default: true }],
  });
