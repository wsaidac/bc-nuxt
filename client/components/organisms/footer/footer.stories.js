import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Footer from './index.vue';
import { info } from '~~/.storybook/utils'

import store from '~~/.storybook/store';
import mock from '~~/.storybook/mocks/homepage.state.json'
import mainMock from '~~/.storybook/mocks/main-menu.state.json'


// definition
Vue.component('ui-footer', Footer)

const footerMock = get(mock, 'menus.footer', {})
const pmMock = get(mock, 'shared.paymentMethods', {})

store.commit('menus/setFooter', footerMock)
store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setPaymentMethods', { icons: pmMock })

// stories
storiesOf('Organisms/Footer', module)
  .add('default', () => ({
    template: `<ui-footer />`,
    components: { Footer },
    store,
  }), {
      info: {},
      backgrounds: [{
        name: 'gray', value: '#f3f3f3', default: true,
      }],
    })
