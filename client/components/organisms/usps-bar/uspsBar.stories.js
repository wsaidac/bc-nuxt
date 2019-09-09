import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import UspsBar from './index.vue';
import { info } from '~~/.storybook/utils'

import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';

const uspsMock = get(mock, 'shared.usps', {})

// definition
Vue.component('usps-bar', UspsBar)

store.commit('shared/setUsps', uspsMock)



// stories
storiesOf('Organisms/Usps Bar', module)
  .add('default', () => ({
    template: `
      <container class="py-6">
        <usps-bar />
      </container>
    `,
    components: { UspsBar },
    store,
  }), info)
