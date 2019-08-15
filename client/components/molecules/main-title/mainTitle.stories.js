import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import MainTitle from './index.vue';
import { info } from '~~/.storybook/utils'

import { withKnobs, select } from '@storybook/addon-knobs';

// definition
Vue.component('main-title', MainTitle)


const typeOptions = {
  primary: 'primary',
  secondary: 'secondary',
}

// props
const props = {
  type: {
    default: select('Type', typeOptions, 'primary')
  },
}

// template


// stories
storiesOf('Molecules/Main Title', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { MainTitle },
    props: props,
    template: `
      <main-title
        :type="type"
      >
        Lebara Prepaid Refill
      </main-title>
    `,
  }), info)
