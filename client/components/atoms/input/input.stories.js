/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import {
  storiesOf,
} from '@storybook/vue';

import {
  boolean,
} from '@storybook/addon-knobs';
import Input from './index.vue';
import {
  info,
} from '~~/.storybook/utils';


// definition
Vue.component('ui-input', Input);


// stories
storiesOf('Atoms/Input', module)
  .add('default', () => ({
    components: {
      Input,
    },
    props: {
      hasError: {
        default: boolean('hasError', false),
      },
    },
    data() {
      return {
        value: '',
      };
    },
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/2">
            <ui-input label="Username" v-model="value" />
          </column>
        </row>
      </container>
    `,
  }), info)
  .add(':hasError', () => ({
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/2">
            <ui-input has-error label="Username" v-model="value" />
          </column>
        </row>
      </container>`,
    components: {
      Input,
    },
    data() {
      return {
        value: '',
      };
    },
  }), info)
  .add('succeeded', () => ({
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/2">
            <ui-input label="Username" v-model="value" />
          </column>
        </row>
      </container>
    `,
    components: {
      Input,
    },
    data() {
      return {
        value: 'Jhon Doe',
      };
    },
  }), info)
  .add('loading', () => ({
    template: `
      <container class="py-8">
        <row>
          <column class="w-full md:w-1/2">
            <ui-input
              is-loading
              label="Username"
              v-model="value"
            />
          </column>
        </row>
      </container>
    `,
    components: {
      Input,
    },
    data() {
      return {
        value: 'Jhon Doe',
      };
    },
  }), info);
