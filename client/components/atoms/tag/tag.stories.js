import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Tag from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('tag', Tag)


// stories
storiesOf('Atoms/Tag', module)
  .add('default', () => ({
    template: `<tag />`,
    components: { Tag },
  }), info)
