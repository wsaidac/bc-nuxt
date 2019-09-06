import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import ReviewList from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('review-list', ReviewList)


// stories
storiesOf('Organisms/Review List', module)
  .add('default', () => ({
    template: `<container class="py-8"><review-list /></container>`,
    components: { ReviewList },
  }), info)
