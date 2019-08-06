import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Divider from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('divider', Divider)

// stories
storiesOf('Atoms/Divider', module)
  .add('default', () => ({
    template: `<divider />`,
    components: { Divider },
  }), info)
  .add(':type=small', () => `
    <card p='4'>
      <ui-title>Lebara mobile</ui-title>
      <divider type="small"/>
    </card>
  `, info)
