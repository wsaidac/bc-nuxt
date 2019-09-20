import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Card from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('card', Card)


// stories
storiesOf('Atoms/Card', module)
  .add('default', () => ({
    template: `
    <container class="py-8">
      <row>
        <column class="w-full md:w-1/3">
          <card><div style="margin: 100px">content inside a card</div></card>
        </column>
      </row>
    </container>`,
    components: { Card },
  }), info)
  .add(':highlighted', () => `
    <container class="py-8">
      <row>
        <column class="w-full md:w-1/3">
          <card highlighted><div style="margin: 100px">content inside a card</div></card>
        </column>
      </row>
    </container>
  `, info)
