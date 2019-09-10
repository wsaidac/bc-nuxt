<template>
  <layout>
    <template v-slot:banner>
      <product-detail :product="product" />
    </template>
    <template v-slot:content>
      <product-list
        :title="$t('pages.product.product_list.title', { brandName: brandInfo.name })"
        :products="relatedProducts"
        :max-len="2"
        :brand-info="brandInfo"
      />
      <usps-bar />
      <seo-block :info="brand.highlight" />
      <activation-info :info="brand.infoBlock" />
      <faq-list :questions="brand.faqQuestions.questions" />
    </template>
  </layout>
</template>

<script>
import VueTypes from 'vue-types';
import { get } from 'lodash';

import Layout from '~/components/layouts/default';
import {
  ProductDetail, ProductList, UspsBar, ActivationInfo, FaqList, SeoBlock,
} from '~/components/organisms';
import { Row, Column } from '~/components/grid';
import { getProductFromPost, getProductListFromPost } from './utils';


export default {
  components: {
    Layout,
    ProductDetail,
    ProductList,
    UspsBar,
    ActivationInfo,
    FaqList,
    SeoBlock,
  },
  props: {
    post: VueTypes.object,
  },

  computed: {
    product() {
      return getProductFromPost(this.post);
    },
    relatedProducts() {
      const products = getProductListFromPost(this.post).filter((p) => p.id !== this.product.id);
      return products;
    },
    brand() {
      return get(this, 'post.brands.nodes[0]', {});
    },
    brandInfo() {
      const {
        id, name, slug, categoryHeader,
      } = this.brand;
      return {
        id,
        slug,
        name,
        logoSrc: categoryHeader.image,
      };
    },
  },
};

</script>
