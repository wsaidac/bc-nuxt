import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Collapsable from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('collapsable', Collapsable)


// stories
storiesOf('Atoms/Collapsable', module)
  .add('default', () => ({
    template: `
      <card space="none">
        <collapsable>
          <template v-slot:header>
            <ui-title type="h4">Awesome title</ui-title>
          </template>
          <template v-slot:content>
            <p>content inside the <b>collapsable</b></p>
          </template>
        </collapsable>
      </card>
    `,
    components: { Collapsable },
  }), info)
