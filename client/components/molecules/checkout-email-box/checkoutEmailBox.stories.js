import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import InputBox from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('checkout-email-box', InputBox)


// stories
storiesOf('Molecules/Checkout Email Box', module)
  .add('default', () => ({
    template: `
      <container class="py-6">
        <row>
          <column class="w-full lg:w-7/12">
            <checkout-email-box />
          </column>
        </row>
      </container>
    `,
    components: { InputBox },
  }), info)
