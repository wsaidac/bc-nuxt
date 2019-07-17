/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import ClickOutside from 'vue-click-outside';
import VueMq from 'vue-mq';

import { breakpoints } from '~/constants';

import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import { info } from '~~/.storybook/utils';

import {
  withKnobs,
  text,
  number,
} from '@storybook/addon-knobs';

import {
  action,
} from '@storybook/addon-actions';
import Select from './index.vue';


Vue.directive('click-outside', ClickOutside);


Vue.use(VueMq, {
  breakpoints: {
    sm: breakpoints.SM,
    md: breakpoints.MD,
    lg: breakpoints.LG,
  },
  // default for SSR
  defaultBreakpoint: 'sm',
});


// definition
Vue.component('ui-select', Select);

// stories
storiesOf('Select', module)
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
      <ui-select
        :options="[{ id: 1, value: 'value1', label: 'label 1' }, { id: 2, value: 'value2', label: 'label 2' }]"
        placeholder="Select your bank"
        @select="action"
      />
    `,
    methods: {
      action: action('selected'),
    },
  }), {
    info: {
      summary: 'Check  the `select` event behavior in `actions` tab',
    },
  })
  .add(':hasError', () => ({
    components: {
      Select,
    },
    template: `
    <ui-select
      hasError
      :options="[{ id: 1, value: 'value1', label: 'label 1' }, { id: 2, value: 'value2', label: 'label 2' }]"
      placeholder="Select your bank"
    />`,
  }), info);
