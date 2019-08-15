import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import BrandQuickLinks from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('brand-quick-links', BrandQuickLinks)


// stories
storiesOf('Molecules/Brand Quick Links', module)
  .add('default', () => ({
    data() {
      return {
        links: [
          {
            title: "element 2",
            scrollPath: "#el2"
          },
          {
            title: "element 3",
            scrollPath: "#el3"
          }
        ]
      }
    },
    template: `
      <div>
        <brand-quick-links :links="links" />
        <div id="el1" style="height:500px; width:500px" class="border border-error"> element 1</div>
        <div id="el2" style="height:500px; width:500px" class="border border-primary">element 2</div>
        <div id="el3" style="height:500px; width:500px" class="border border-gray"> element 3</div>
      </div>
    `,
    components: { BrandQuickLinks },
  }), info)
