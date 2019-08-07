/* eslint-disable */
import Vue from 'vue';
import {
  storiesOf
} from '@storybook/vue';
import Icon from './index.vue';
import {
  info
} from '~~/.storybook/utils'

import { fontIconTypes } from './types'

// definition
Vue.component('icon', Icon)



// stories
storiesOf('Atoms/Icon', module)
  .add('default', () => ({
    data() {
      return {
        fontIconTypes: fontIconTypes
      }
    },
    template: `
    <container>
      <ui-title class="mb-6">Font</ui-title>
      <row wrap class="mb-8">
        <column
          v-for="icon in fontIconTypes"
          class="rounded border border-gray p-4 w-1/4 md:w-1/6 lg:w-1/12 m-2 flex-col items-center justify-center "
        >
          <icon :icon='icon' font-size="3xl"/>
          <p class="text-xs lg:text-sm">{{ icon }}</p>
        </column>
      </row>
      <ui-title>SVG</ui-title>
      <row wrap>
        <column
          class="rounded border border-gray p-4 w-1/4 md:w-1/6 lg:w-1/12 m-2 flex-col items-center justify-center"
        >
          <icon icon='hole'/>
          <p>hole</p>
        </columnclass="m-4>
      </row>
      </container>
    `,
    components: {
      Icon
    },
  }), info)
  .add(':size=7xl', () => `<icon icon='plus' fontSize='7xl'/>`)
  .add(':color=success', () => `<icon icon='plus' color='success' fontSize='7xl'/>`)
