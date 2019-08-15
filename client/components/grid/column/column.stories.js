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
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
            <column class="w-1/12">${content}</column>
          </row>
          <row>
            <column class="w-1/4">
              ${content}
            </column>
            <column class="w-1/4">
              ${content}
            </column>
            <column class="w-1/4">
              ${content}
            </column>
            <column class="w-1/4">
              ${content}
            </column>
          </row>
          <row>
            <column class="w-1/2">
              ${content}
            </column>
            <column class="w-1/2">
              ${content}
            </column>
          </row>
          <row>
            <column>${content}</column>
          </row>
      </container>`,
    components: { Column },
  }), info);
