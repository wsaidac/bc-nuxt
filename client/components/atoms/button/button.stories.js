import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import UIButton from './index.vue';

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { action } from '@storybook/addon-actions';

Vue.component('my-button', UIButton)

const typeOptions = {
  Primary: 'primary',
  Secondary: 'secondary'
}

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { UIButton },
    props: {
      justify: {
        default: boolean('Justify', false)
      },
      disable: {
        default: boolean('disable', false)
      },
      text: {
        default: text('Text', 'Hello Storybook')
      },
      type: {
        default: select('Type', typeOptions, 'primary')
      }
    },
    template: `
      <my-button
        :disable="disable"
        :justify="justify"
        :type="type"
      >
        {{ text }}
      </my-button>
    `,
  }), { info: {} })
  .add(':type=primary', () => `<my-button >Button</my-button>`, { info: {} })
  .add(':type=secondary', () => `<my-button type='secondary'>Button</my-button>`, { info: {} })
  .add(':disable', () => `<my-button disable>another test</my-button>`, { info: {} })
  .add(':loading', () => `<my-button disable>another test</my-button>`, { info: {} })
  .add(':justify', () => ({
    template: `<my-button @click='action' justify type='primary'>another test</my-button>`,
    methods: {
      action: action('clicked')
    },
  }), { info: {} })
