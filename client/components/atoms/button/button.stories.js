import Vue from 'vue';
/* eslint-disable */
import {
  storiesOf
} from '@storybook/vue';
import UIButton from './index.vue';

import {
  withKnobs,
  text,
  boolean,
  select
} from '@storybook/addon-knobs';

import {
  action
} from '@storybook/addon-actions';

Vue.component('ui-button', UIButton)

const typeOptions = {
  Primary: 'primary',
  Secondary: 'secondary'
}

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: {
      UIButton
    },
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
    methods: {
      action: action('clicked')
    },
    template: `
      <ui-button
        :disable="disable"
        :justify="justify"
        :type="type"
      >
        {{ text }}
      </ui-button>
    `,
  }), {
      info: {}
    })
  .add(':type=primary', () => `<ui-button >Button</ui-button>`, {
    info: {}
  })
  .add(':type=secondary', () => `<ui-button type='secondary'>Button</ui-button>`, {
    info: {}
  })
  .add(':disable', () => `
    <div>
      <h4 style="color: #777">Primary:</h4>
      <ui-button disable my='3'>
        disable Primary button
      </ui-button>
      <h4 style="color: #777">Secondary</h4>
      <ui-button disable type='secondary' my='3'>
        disable Primary button
      </ui-button>
    </div>

  `, {
      info: {}
    })
  .add(':loading', () => `<ui-button loading>Button loading</ui-button>`, {
    info: {}
  })
  .add(':justify', () => ({
    template: `<ui-button @click='action' justify type='primary'>another test</ui-button>`,
    methods: {
      action: action('clicked')
    },
  }), {
      info: {}
    })
