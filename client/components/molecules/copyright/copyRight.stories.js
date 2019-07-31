/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Copyright from './index.vue';

// definition
Vue.component('copyright', Copyright);

// stories
storiesOf('Molecules/Copy Right', module)
  .add('default', () => ({
    template: `<copyright/>`,
    components: { Copyright },
  }));
