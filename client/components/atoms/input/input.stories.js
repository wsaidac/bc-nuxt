/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import {
  storiesOf,
} from '@storybook/vue';

import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
import Input from './index.vue';
import {
  info,
} from '~~/.storybook/utils';


// definition
Vue.component('ui-input', Input);


// stories
storiesOf('Input', module)
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
    template: `<ui-input label="Username" v-model="value" />`,
  }), info)
  .add(':hasError', () => ({
    template: `<ui-input hasError label="Username" v-model="value" />`,
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
    template: `<ui-input label="Username" v-model="value" />`,
    components: {
      Input,
    },
    data() {
      return {
        value: 'Jhon Doe',
      };
    },
  }), info);
