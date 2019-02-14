<template>
  <div class="product-quickbuy">
    <shared-loader :loading="!isLoaded">
      <h2
        class="product-quickbuy__title"
        v-text="`Let's speed it up`"
      />
      <ui-row>
        <ui-col :sm="{ span: 12, offset: 2 }">
          <product-card
            :product="product"
            mode="horizontal"
          />
        </ui-col>
        <ui-col :sm="8">
          <product-variants :product="product" />
        </ui-col>
      </ui-row>
    </shared-loader>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

/* eslint-disable-next-line */
import { UiCol, UiRow } from "~/components/ui";
import ProductCard from '~/components/product/card';
import ProductVariants from '~/components/product/variants';
import SharedLoader from '~/components/shared/loader';

import { impressionTransformQuickbuy } from '~/plugins/gtm';

export default {
  name: 'ProductQuickbuy',

  components: {
    UiCol,
    UiRow,
    ProductCard,
    ProductVariants,
    SharedLoader,
  },

  props: {
    defaultProduct: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapGetters('async', ['isLoaded']),

    userProduct() {
      const currentUser = this.$store.getters['auth/currentUser'];
      return this.isLoaded && currentUser ? currentUser.quickbuy : undefined;
    },
    product() {
      return this.userProduct || this.defaultProduct;
    },
  },

  mounted() {
    this.$track(impressionTransformQuickbuy(this.product));
  },
};
</script>

<style lang="scss">
.product-quickbuy {
  &__title {
    text-align: center;
  }
}
</style>
