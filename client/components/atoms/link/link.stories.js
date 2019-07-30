import Vue from 'vue';
/* eslint-disable */
import {
  storiesOf
} from '@storybook/vue';
import Link from './index.vue';
import {
  info
} from '~~/.storybook/utils'



// definition
Vue.component('ui-link', Link)

// stories
storiesOf('Atoms/Link', module)
  .add('default', () => ({
    template: `<ui-link>click here</ui-link>`,
    components: {
      Link
    },
  }), info)
  .add(':invert', () => `
    <div style="background: #333; padding: 2rem;">
      <ui-link url="https://google.com" invert>click here</ui-link>
    </div>
  `, info)
  .add(':disable', () => `
    <div>
      <div style="padding: 2rem; margin-top: 2rem;">
        <ui-link disable>click here</ui-link>
      </div>
      <div style="background: #333; padding: 2rem; margin-top: 2rem;">
        <ui-link  invert disable>click here</ui-link>
      </div>
    </div>
  `, info)
