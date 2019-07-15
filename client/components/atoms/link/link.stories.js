import Vue from 'vue';
/* eslint-disable */
import {
  storiesOf
} from '@storybook/vue';
import Link from './index.vue';
import {
  info
} from '~~/.storybook/utils'

import {
  action
} from '@storybook/addon-actions'



// it is just for use nuxt-link into storybook
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: `<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>`,
})

// definition
Vue.component('ui-link', Link)

// stories
storiesOf('Link', module)
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
