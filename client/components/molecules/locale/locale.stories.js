import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Locale from './index.vue';
import { info } from '~~/.storybook/utils'
import {
  action
} from '@storybook/addon-actions'

// definition
Vue.component('locale', Locale)


// stories
storiesOf('Molecules/Locale', module)
  .add('default', () => ({
    data() {
      return {
        country: { name: 'US' }
      }
    },
    template: `<locale :country="country" @locale:click="action"/>`,
    components: { Locale },
    methods: {
      action: action('locale:click')
    }
  }), info)
