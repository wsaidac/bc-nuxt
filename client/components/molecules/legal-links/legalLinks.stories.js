import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import LegalLinks from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('legal-links', LegalLinks)


// stories
storiesOf('Molecules/Legal Links', module)
  .add('default', () => ({
    data() {
      return {
        links: [
          { url: '#', title: 'Cookies' },
          { url: '#', title: 'Privacy' },
          { url: '#', title: 'Conditions' },
        ]
      }
    },
    template: `<legal-links :links="links" />`,
    components: { LegalLinks },
  }), info)
