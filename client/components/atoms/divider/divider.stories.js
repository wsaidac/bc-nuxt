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
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/3">
            <card space="none">
              <p class="p-6">space</p>
              <divider />
              <p class="p-6">space</p>
            </card>
          </column>
        </row>
      </container>
    <divider />`,
    components: { Divider },
  }), info)
  .add(':type=small', () => `
    <container class="py-6">
      <row>
        <column class="w-full md:w-1/3">
          <card p='4'>
            <ui-title>Lebara mobile</ui-title>
            <divider type="small"/>
          </card>
        </column>
      </row>
    </container>

  `, info)
