import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Card from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('card', Card)


// stories
storiesOf('Card', module)
  .add('default', () => ({
    template: `<card><div style="margin: 100px">content inside a card</div></card>`,
    components: { Card },
  }), info)
  .add(':highlighted', () => `<card highlighted><div style="margin: 100px">content inside a card</div></card>`, info)
