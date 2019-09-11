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
    template: `
    <container class="my-8">
      <row>
        <column class="w-1/4"> <button-icon icon="close" font-size="4xl" /></column>
        <column class="w-1/4"> <button-icon icon="hamburger" font-size="4xl" /></column>
        <column class="w-1/4"> <button-icon icon="plus" font-size="4xl" /></column>
      </row>
    </container>`,
    components: { ButtonIcon },
  }), info)
