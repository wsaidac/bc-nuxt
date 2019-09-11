import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Info from './index.vue';

// definition
Vue.component('story-info', Info)



// stories
storiesOf('Styleguide', module)
  .add('default', () => `<container><story-info /></container>`)
