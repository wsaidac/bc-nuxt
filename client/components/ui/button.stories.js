import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import UIButton from './button.vue';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { action, configureActions } from '@storybook/addon-actions';

Vue.component('ui-button', UIButton)

const typeOptions = {
  Primary: 'primary',
  Secondary: 'secondary',
  Default: 'default'
}
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { UIButton },
    props: {
      block: {
        default: boolean('Block', false)
      },
      text: {
        default: text('Text', 'Hello Storybook')
      },
      type: {
        default: select('Type', typeOptions, 'default')
      }
    },
    template: `<ui-button :block="block" :type="type">{{ text }}</ui-button>`,
  }), { info: {} })
  .add('Primary', () => ({
    render: h => <UIButton type="primary">Click me</UIButton>,

  }), { info: {} })
  .add('Secondary', () => ({ render: h => <UIButton type="secondary" icon='eye'>text</UIButton> }), { info: {} })
  .add('block', () => `<ui-button >another test</ui-button>`, { info: {} })
  .add('Justify', () => ({
    template: `<ui-button @click='action' justify type='primary'>another test</ui-button>`,
    methods: {
      action: action('clicked')
    },
  }), { info: {} })
