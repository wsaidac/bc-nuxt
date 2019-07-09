import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Title from './index.vue';
import { info } from '~~/.storybook/utils'

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

// definition
Vue.component('ui-title', Title)

// options
const typeOptions = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5'
}

const colorOptions = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  'gray-black': 'gray-dark',
  'gray-dark': 'gray-dark',
  black: 'black',
  white: 'white'
}

// props
const props = {
  text: {
    default: text('Text', 'Title')
  },
  type: {
    default: select('Type', typeOptions, 'h1')
  },
  light: {
    default: boolean('Light (h4, h5)', false)
  },
  color: {
    default: select('Color', colorOptions, 'primary'),
  },
  underline: {
    default: boolean('Underline (h4, h5)', false)
  }
}

// template
const getTemplate = (typeNumber = 'h5', extraProp = '') => `
  <ui-title
    type="h${typeNumber}"
    ${extraProp}
  >
    Title ${typeNumber}
  </ui-title>
`

// stories
storiesOf('Title', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { Title },
    props: props,
    template: `
      <ui-title
        :type="type"
        :light="light"
        :color="color"
        :underline="underline"
      >
        {{ text }}
      </ui-title>
    `,
  }), info)
  .add(':type=h1', () => getTemplate('1'), info)
  .add(':type=h2', () => getTemplate('2'), info)
  .add(':type=h3', () => getTemplate('3'), info)
  .add(':type=h4', () => getTemplate('4'), info)
  .add(':type=h5', () => getTemplate('5'), info)
  .add(':light', () => getTemplate('5', 'light'), info)
  .add(':underline', () => getTemplate('5', 'underline'), info)
