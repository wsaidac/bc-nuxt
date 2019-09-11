import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import InputBox from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('input-box', InputBox)


// stories
storiesOf('Molecules/InputBox', module)
  .add('default', () => ({
    template: `
      <container class="py-6">
        <row>
          <column class="w-full lg:w-7/12">
            <input-box />
          </column>
        </row>
      </container>
    `,
    components: { InputBox },
  }), info)