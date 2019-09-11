import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import BrandPage from './index.vue';
import { info } from '~~/.storybook/utils'

import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'

import store from '~~/.storybook/store';

const footerMock = get(mock, 'menus.footer', {})
const uspsMock = get(mock, 'shared.usps', {})
const csMock = get(mock, 'shared.customerService', {})

import categoryMock from '~~/.storybook/mocks/category-post.prop.json';
// definition



// definition

store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setUsps', uspsMock)
store.commit('shared/setCustomerService', csMock)
store.commit('menus/setFooter', footerMock)


// definition
Vue.component('brand-page', BrandPage)


const post = categoryMock;



// stories
storiesOf('Pages/Brand', module)
  .add('default', () => ({
    data() {
      return {
        post,
      }
    },
    template: `<brand-page :post="post"/>`,
    components: { BrandPage },
    store,
  }), info)
