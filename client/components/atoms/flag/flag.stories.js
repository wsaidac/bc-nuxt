/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import {
  storiesOf,
} from '@storybook/vue';
import Flag from './index.vue';
import {
  info,
} from '~~/.storybook/utils';

// definition
Vue.component('flag', Flag);


// stories
storiesOf('Atoms/Flag', module)
  .add('default', () => ({
    template: `
      <container class="py-8">
        <h2 class="mb-6">Countries by ISO 3166 code</h2>
        <div style="display: flex; flex-direction: row; font-size: 2rem;">
          <flag country="co" class="mr-4" />
          <flag country="us" class="mr-4"/>
          <flag country="ai" class="mr-4"/>
          <flag country="br" class="mr-4"/>
          <flag country="de" class="mr-4"/>
          <flag country="fr" class="mr-4"/>
        </div>
      </container>
    `,
    components: {
      Flag,
    },
  }), info);
