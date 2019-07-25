/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Container from './index.vue';
import { info } from '~~/.storybook/utils';

// definition
Vue.component('container', Container);


// stories
storiesOf('Grid/Container', module)
  .add('default', () => ({
    template: `
      <container class="bg-gray-light rounded border-solid border-gray border">
        <div style="min-height: 100vh"></div>
      </container>`,
    components: { Container },
  }), info);
