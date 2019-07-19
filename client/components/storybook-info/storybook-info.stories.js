import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Info from './index.vue';

// definition
Vue.component('story-info', Info)



// stories
storiesOf('Info', module)
  .add('default', () => `<story-info />`)
