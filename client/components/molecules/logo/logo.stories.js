/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Logo from './index.vue';

import store from '~~/.storybook/store';

// definition
Vue.component('logo', Logo);

// stories
storiesOf('Molecules/Logo', module)
  .add('default', () => ({
    template: `<Logo alt="logo"/>`,
    components: { Logo },
    store,
  }), {
    info: {},
    backgrounds: [{
      name: 'black', value: '#444', default: true,
    }],
  });
