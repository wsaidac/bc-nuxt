import Vue from 'vue';
import { get } from 'lodash';
/* eslint-disable */
import { storiesOf } from '@storybook/vue';
import ProductList from './index.vue';
import { info } from '~~/.storybook/utils'
import store from '~~/.storybook/store';
import categoryMock from '~~/.storybook/mocks/category-post.prop.json';
import mock from '~~/.storybook/mocks/homepage.state.json';

const uspsMock = get(mock, 'shared.usps', {});

const productsMock = categoryMock.products;



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
  rapidoId: get(post, 'rapidoProduct.id'),
  banner: getProductBanner(post),
  image: getProductImage(post),
  serviceFee: '???', // missing-field
  description: fakeContent, // missing-field
});


const products = productsMock.nodes.map(product => getProductFromPost(product))


store.commit('shared/setUsps', uspsMock);


// definition
Vue.component('product-list', ProductList)


// stories
storiesOf('Organisms/Product List', module)
  .add('default', () => ({
    data() {
      return {
        products: products,
      }
    },
    template: `<product-list title="Spotify Gift Cards" :products="products"/>`,
    components: { ProductList },
  }), info)
