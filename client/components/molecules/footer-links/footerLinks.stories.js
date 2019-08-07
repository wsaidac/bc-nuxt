import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Item from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('footer-link-item', Item)


// stories
storiesOf('Molecules/Footer Link Item', module)
  .add('default', () => ({
    data() {
      return {
        links: [
          {
            title: "Customer service",
            url: "#"
          },
          {
            title: "About beltegoed.nl",
            url: "#"
          },
          {
            title: "Payment methods",
            url: "#"
          },
          {
            title: "Upgrade instructions",
            url: "#"
          },
        ]
      }
    },
    template: `
      <footer-link-item
        title="Service and help"
        :links="links"
      />
    `,
    components: { Item },
  }), info)
