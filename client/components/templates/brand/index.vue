<template>
  <layout>
    <template v-slot:banner>
      <category-banner :category-header="post.categoryHeader" />
    </template>
    <template v-slot:content>
      <product-list
        title="Spotify Gift Cards"
        :products="products"
      />
      <usps-bar />
      <activation-info :info="post.infoBlock" />
      <faq-list :questions="questions" />
      <review-list />
    </template>
  </layout>
</template>

<script>
import VueTypes from 'vue-types';
import { get } from 'lodash';

// this one is temporal
import { getProductFromPost } from './utils';

import Layout from '../home/layout';
import {
  CategoryBanner, FaqList, ProductList, UspsBar, ReviewList, ActivationInfo,
} from '~/components/organisms';

export default {
  components: {
    Layout,
    CategoryBanner,
    FaqList,
    ProductList,
    UspsBar,
    ReviewList,
    ActivationInfo,
  },
  props: {
    post: VueTypes.shape({
      categoryHeader: VueTypes.object,
      infoBlock: VueTypes.object.def({}),
    }).loose,
  },
  computed: {
    products() {
      const nodes = get(this, 'post.products.nodes', []);
      return nodes.map(getProductFromPost);
    },
    questions() {
      return get(this, 'post.faqQuestions.questions', []);
    },
  },
};
</script>
