import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Navbar from './index.vue';
import { MobileMenu } from '~/components/organisms'
import { info } from '~~/.storybook/utils'

import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';

const footerMock = get(mock, 'menus.footer', {})
const uspsMock = get(mock, 'shared.usps', {})
const csMock = get(mock, 'shared.customerService', {})

// definition
Vue.component('navbar', Navbar)
Vue.component('mobile-menu', MobileMenu)

store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setUsps', uspsMock)
store.commit('shared/setCustomerService', csMock)
store.commit('menus/setFooter', footerMock)



// stories
storiesOf('Organisms/Navbar', module)
  .add('default', () => ({
    template: `<navbar />`,
    components: { Navbar },
    store,
  }), info)
