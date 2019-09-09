<template>
  <layout>
    <template v-slot:banner>
      <product-detail :product="product" />
    </template>
  </layout>
</template>

<script>
import VueTypes from 'vue-types';
import Layout from '~/components/layouts/default';
import {
  ProductDetail
} from '~/components/organisms';
import { Row, Column } from '~/components/grid';
import { getProductFromPost } from './utils'


export default {
  components: {
    ProductDetail
  },
  props: {
    post: VueTypes.object,
  },

  computed: {
    product() {
      console.log('this', this.post)
      return getProductFromPost(this.post)
      // return this.post
    }
  }
};

</script>
