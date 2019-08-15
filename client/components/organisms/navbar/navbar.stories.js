import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Navbar from './index.vue';
import { info } from '~~/.storybook/utils'

import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';


const uspsMock = get(mock, 'shared.usps', {})
const csMock = get(mock, 'shared.customerService', {})

// definition
Vue.component('navbar', Navbar)

store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setUsps', uspsMock)
store.commit('shared/setCustomerService', csMock)




// stories
storiesOf('Organisms/Navbar', module)
  .add('default', () => ({
    template: `<navbar />`,
    components: { Navbar },
    store,
  }), info)
