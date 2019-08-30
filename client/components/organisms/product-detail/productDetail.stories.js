/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { get } from 'lodash';
import { storiesOf } from '@storybook/vue';
import {
  action,
} from '@storybook/addon-actions';
import ProductDetails from './index.vue';
import { info } from '~~/.storybook/utils';

import store from '~~/.storybook/store';
import productMock from '~~/.storybook/mocks/product-post.prop.json';
import mock from '~~/.storybook/mocks/homepage.state.json';

const uspsMock = get(mock, 'shared.usps', {});

// definition
Vue.component('product-details', ProductDetails);


const fakeContent = '<ul><li>This content description is fake</li><li>Onbeperkt bellen en SMSen naar Lebara nummers</li> <li>500 MB data 4G</li></ul>';

const getProductBanner = (post = {}) => {
  const { content: { banner, image }, categories = {} } = post;
  const categoryBanner = get(categories, 'nodes[0].categoryHeader.banner', null);
  return banner || categoryBanner || image;
};

const getProductImage = (post = {}) => {
  const { content: { banner, image }, categories = {} } = post;
  const categoryImage = get(categories, 'nodes[0].categoryHeader.image', null);
  return image || categoryImage || banner;
};

/**
 * TODO: Move this to a parent component or API Hub (?)
 * the idea is only pass the necessary fields to the component
 */
const getProductFromPost = (post = {}) => ({
  value: get(post, 'information.issueValue', ''),
  title: post.title,
  rapidoId: get(this, 'product.rapidoProduct.id'),
  banner: getProductBanner(post),
  image: getProductImage(post),
  serviceFee: '???', // missing-field
  description: fakeContent, // missing-field
});

store.commit('shared/setUsps', uspsMock);


// stories
storiesOf('Organisms/Product Details', module)
  .add('default', () => ({
    components: {
      ProductDetails,
    },
    data() {
      return {
        product: getProductFromPost(productMock),
      };
    },
    template: `
      <product-details
        :product="product"
        @product-card:click="action"
      />
    `,
    methods: {
      action: action('product-card:click'),
    },
    store,

  }), info);
