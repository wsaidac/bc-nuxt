import { action } from '@storybook/addon-actions';

/**
 * Plugin to register `nuxt-link` components and add a storybook action as fallback
 */
export default {
  install(Vue) {

    Vue.component('nuxt-link', {
      props: ['to'],
      methods: {
        log() {
          action('link target')(this.to)
        },
      },
      template: `<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>`,
    })
  }
}
