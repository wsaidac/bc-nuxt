import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import HeaderLinks from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('header-links', HeaderLinks)


// stories
storiesOf('Molecules/Header Links', module)
  .add('default', () => ({
    data() {
      return {
        items: [
          { title: 'Mobile Recharge', url: '#' },
          { title: 'Prepaid Cards', url: '#' },
          { title: 'Entertainment Cards', url: '#' },
          { title: 'Games Cards', url: '#' },
          { title: 'Gift Cards', url: '#' },
        ]
      }
    },
    template: `
      <header-links :items="items"/>
    `,
    components: { HeaderLinks },
  }), info)
