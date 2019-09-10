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
    </template>
  </layout>
</template>

<script>
import VueTypes from 'vue-types';
import Layout from '~/components/layouts/default';
import {
  ProductDetail, ProductList, UspsBar,
} from '~/components/organisms';
import { Row, Column } from '~/components/grid';
import { getProductFromPost, getProductListFromPost, getBrandInfo } from './utils';


export default {
  components: {
    Layout,
    ProductDetail,
    ProductList,
    UspsBar,
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
    brandInfo() {
      return getBrandInfo(this.post);
    },
  },
};

</script>
