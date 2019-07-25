/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import {
  storiesOf,
} from '@storybook/vue';
import Flag from './index.vue';
import {
  info,
} from '~~/.storybook/utils';

// definition
Vue.component('flag', Flag);


// stories
storiesOf('Atoms/Flag', module)
  .add('default', () => ({
    template: `
      <div style="display: flex; flex-direction: row; font-size: 2rem;">
        <flag country="co" />
      <div>
    `,
    components: {
      Flag,
    },
  }), info);
