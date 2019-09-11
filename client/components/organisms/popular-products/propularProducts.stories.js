import Vue from 'vue';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import ProductList from './index.vue';
import { info } from '~~/.storybook/utils'
import mock from '~~/.storybook/mocks/home-post.prop.json';

// definition
Vue.component('popular-products', ProductList)


// stories
storiesOf('Organisms/Popular Products', module)
  .add('default', () => ({
    data() {
      return {
        products: mock.popularProducts,
      }
    },
    template: `
      <container>
        <popular-products :products="products" />
      </container>
    `,
    components: { ProductList },
  }), info)
