/* eslint-disable */
import Vue from 'vue';
import {
  storiesOf
} from '@storybook/vue';
import Icon from './index.vue';
import {
  info
} from '~~/.storybook/utils'

// definition
Vue.component('ui-icon', Icon)


// stories
storiesOf('Atoms/Icon', module)
  .add('default', () => ({
    template: `
      <div style="display: flex; flex-direction: row; font-size: 2rem;">
        <div style="margin: 1rem;">
          <ui-icon icon='breadcrumb'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='check'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='close'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='down'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='entertainment'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='giftcards'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='hole'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='min'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='mobile-recharge'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='plus'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='popular'/>
        </div>
        <div style="margin: 1rem;">
          <ui-icon icon='prepaid-cards'/>
        </div>
      <div>
    `,
    components: {
      Icon
    },
  }), info)
  .add(':size=7xl', () => `<ui-icon icon='plus' fontSize='7xl'/>`)
  .add(':color=success', () => `<ui-icon icon='plus' color='success' fontSize='7xl'/>`)
