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
      <container class="py-8">
        <row>
          <column class="w-1/2 md:w-1/4">
            <ui-button
              :disable="disable"
              :justify="justify"
              :type="type"
            >
              {{ text }}
            </ui-button>
          </column>
        </row>
      </container>

    `,
  }), {
      info: {}
    })
  .add(':type=primary', () => `
    <container class="p-8">
        <row>
          <column class="w-1/2 md:w-1/4">
            <ui-button
            >
              Button
            </ui-button>
          </column>
        </row>
      </container>
  `, {
      info: {}
    })
  .add(':type=secondary', () => `
      <container class="p-8">
        <row>
          <column class="w-1/2 md:w-1/4">
            <ui-button
              type="secondary"
            >
              Button
            </ui-button>
          </column>
        </row>
      </container>
  `, {
      info: {}
    })
  .add(':disable', () => `
    <container>
      <row wrap>
        <column class="w-full md:w-1/3">
          <h4 style="color: #777">Primary:</h4>
          <ui-button disable my='3'>
            disable Primary button
          </ui-button>
        </column>
        <column class="w-full md:w-1/3">
          <h4 style="color: #777">Secondary</h4>
          <ui-button disable type='secondary' my='3'>
            disable secondary button
          </ui-button>
        </column>
      </row>
    </container>

  `, {
      info: {}
    })
  .add(':loading', () => `<ui-button loading>Button loading</ui-button>`, {
    info: {}
  })
  .add(':justify', () => ({
    template: `
      <container class="p-8 border">
        <row>
          <column class="w-full md:w-1/2">
            <ui-button
              justify
              @click="action"
            >
              Button
            </ui-button>
          </column>
        </row>
      </container>
    `,
    methods: {
      action: action('button:clicked')
    },
  }), {
      info: {}
    })
