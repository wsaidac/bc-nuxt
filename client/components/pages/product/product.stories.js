import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import Product from './index.vue';
import Layout from '~/components/layouts/default'
import { info } from '~~/.storybook/utils'

import mainMock from '~~/.storybook/mocks/main-menu.state.json'
import mock from '~~/.storybook/mocks/homepage.state.json'
import productMock from '~~/.storybook/mocks/product-post.prop.json';

import store from '~~/.storybook/store';

const footerMock = get(mock, 'menus.footer', {})
const uspsMock = get(mock, 'shared.usps', {})
const csMock = get(mock, 'shared.customerService', {})

import homePostMock from '~~/.storybook/mocks/home-post.prop.json';
// definition

const header = homePostMock.header;



// definition

store.commit('menus/setMain', mainMock.data.menus.nodes[0])
store.commit('shared/setUsps', uspsMock)
store.commit('shared/setCustomerService', csMock)
store.commit('menus/setFooter', footerMock)


// definition
Vue.component('layout', Layout)
Vue.component('product-page', Product)



// stories
storiesOf('Pages/Product', module)
  .add('default', () => ({
    data() {
      return {
        post: productMock,
      }
    },
    template: `<product-page :post="post"/>`,
    components: { Product },
    store,
  }), info)
