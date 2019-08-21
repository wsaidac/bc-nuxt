import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import ButtonIcon from './index.vue';
import { info } from '~~/.storybook/utils'

// definition
Vue.component('button-icon', ButtonIcon)


// stories
storiesOf('Atoms/Button Icon', module)
  .add('default', () => ({
    template: `<container class="my-8"><button-icon icon="close" font-size="4xl" /></container>`,
    components: { ButtonIcon },
  }), info)
