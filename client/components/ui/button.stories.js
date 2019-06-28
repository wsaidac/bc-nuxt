import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import UIButton from './button.vue';

import { withInfo } from 'storybook-addon-vue-info'
import { action, configureActions } from '@storybook/addon-actions';

Vue.component('ui-button', UIButton)

storiesOf('Button', module)
  .addDecorator(withInfo)
  .add('Default', () => ({
    components: { UIButton },
    template: `<ui-button>Click me</ui-button>`,
    render: h => <UIButton>Click me</UIButton>,
  }), { info: {} })
  .add('Primary', () => ({
    render: h => <UIButton type="primary">Click me</UIButton>,

  }), { info: {} })
  .add('Secondary', () => ({ render: h => <UIButton type="secondary" icon='eye'>text</UIButton> }), { info: {} })
  .add('block', () => `<ui-button :icon='eye'>another test</ui-button>`, { info: {} })
  .add('Justify', () => ({
    template: `<ui-button @click='action' justify type='primary'>another test</ui-button>`,
    methods: {
      action: action('clicked')
    },
  }), { info: {} })
