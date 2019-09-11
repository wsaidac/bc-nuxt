/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Column from './index.vue';
import { info } from '~~/.storybook/utils';

// definition
Vue.component('column', Column);

const content = '<div class="w-full p-6 bg-link mb-4">Col</div>';

// stories
storiesOf('Grid/Column', module)
  .add('default', () => ({
    template: `
      <container class="bg-gray-light rounded border-solid border-gray border mt-8">
          <row>
            <column v-for="i in 12" :key="i" class="w-1/12">
              <div class="w-full p-6 bg-link mb-4">Col {{ i }}/12 </div>
            </column>
          </row>
          <row>
            <column v-for="i in 4" class="w-1/4">
              <div class="w-full p-6 bg-link mb-4">Col {{ i }}/4 </div>
            </column>
          </row>
          <row>
            <column v-for="i in 2" class="w-1/2">
              <div class="w-full p-6 bg-link mb-4">Col {{ i }}/2 </div>
            </column>
          </row>
          <row>
            <column class="w-full">
              <div class="w-full p-6 bg-link mb-4">Col full </div>
            </column>
          </row>
      </container>`,
    components: { Column },
  }), info);
