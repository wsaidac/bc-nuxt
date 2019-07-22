import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Divider from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('ui-divider', Divider)

// stories
storiesOf('Atoms/Divider', module)
  .add('default', () => ({
    template: `<ui-divider />`,
    components: { Divider },
  }), info)
  .add(':small', () => `
    <card p='4'>
      <ui-title>Lebara mobile</ui-title>
      <ui-divider type="small"/>
    </card>
  `, info)
