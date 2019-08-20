import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import MobileMenu from './index.vue';
import { info } from '~~/.storybook/utils'

import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';


const uspsMock = get(mock, 'shared.usps', {})
const csMock = get(mock, 'shared.customerService', {})

const footerMock = get(mock, 'menus.footer', {})

// definition
Vue.component('mobile-menu', MobileMenu)


store.commit('menus/setFooter', footerMock)
store.commit('menus/setMain', mainMock.data.menus.nodes[0])
// store.commit('shared/setUsps', uspsMock)
// store.commit('shared/setCustomerService', csMock)




// stories
storiesOf('Organisms/Mobile Menu', module)
  .add('default', () => ({
    data() {
      return {
        menuState: 'hidden',
      }
    },
    template: `
      <div class="relative">
        <ui-button @click="menuState = 'visible'">show menu</ui-button>
        <mobile-menu :state="menuState" @menu__close:click="menuState = hidden" />
      </div>
    `,
    components: { MobileMenu },
    store,
  }), {
      info: {},
      viewport: { defaultViewport: 'iphone6' },
    })
