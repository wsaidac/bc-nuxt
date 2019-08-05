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
Vue.component('icon', Icon)


const fontIconTypes = [
  'breadcrumb',
  'check',
  'down',
  'entertainment',
  'giftcards',
  'min',
  'mobile-recharge',
  'plus',
  'popular',
  'prepaid-cards',
];

// stories
storiesOf('Atoms/Icon', module)
  .add('default', () => ({
    data() {
      return {
        fontIconTypes: [
          'breadcrumb',
          'check',
          'down',
          'entertainment',
          'giftcards',
          'min',
          'mobile-recharge',
          'plus',
          'popular',
          'prepaid-cards',
        ]
      }
    },
    template: `
    <container>
      <ui-title>Font</ui-title>
      <row wrap>
        <div
          v-for="icon in fontIconTypes"
          class="m-4"
        >
          <icon :icon='icon' font-size="3xl"/>
          <p>{{ icon }}</p>
        </div>
      </row>
      <ui-title>SVG</ui-title>
      <row wrap>
        <div class="m-4">
          <icon icon='hole'/>
          <p>hole</p>
        </div>
      </row>
      </container>
    `,
    components: {
      Icon
    },
  }), info)
  .add(':size=7xl', () => `<icon icon='plus' fontSize='7xl'/>`)
  .add(':color=success', () => `<icon icon='plus' color='success' fontSize='7xl'/>`)
