/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';
import {
  action,
} from '@storybook/addon-actions';


import { info } from '~~/.storybook/utils';

import Select from './index.vue';

// definition
Vue.component('ui-select', Select);

// stories
storiesOf('Atoms/Select', module)
  .addDecorator(withKnobs)
  .add('default', () => ({
    components: {
      Select,
    },
    props: {
      placeholder: {
        default: text('Placeholder:', ''),
      },
      initialValue: {
        default: number('Initial Value:', 1),
      },
    },
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/2">
            <ui-select
              :options="[{ id: 1, value: 'value1', label: 'label 1' }, { id: 2, value: 'value2', label: 'label 2' }]"
              placeholder="Select your bank"
              @select="action"
            />
          </column>
        </row>
      </container>
    `,
    methods: {
      action: action('selected'),
    },
  }),
    {
      info: {
        summary: 'Check  the `select` event behavior in `actions` tab',
      },
    })
  .add(':hasError', () => ({
    components: {
      Select,
    },
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/2">
            <ui-select
              hasError
              :options="[{ id: 1, value: 'value1', label: 'label 1' }, { id: 2, value: 'value2', label: 'label 2' }]"
              placeholder="Select your bank"
            />
          </column>
        </row>
      </container>
    `,
  }), info);
