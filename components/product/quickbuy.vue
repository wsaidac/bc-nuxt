<template>
  <div class="product-quickbuy" >
    <shared-loader :loading="loading">
      <h2
        class="product-quickbuy__title"
        v-text="`Let's speed it up`"
      />
      <ui-row>
        <ui-col :sm="{ span: 12, offset: 2 }">
          <product-card
            :product="userProduct || defaultProduct"
            mode="horizontal"
          />
        </ui-col>
        <ui-col :sm="8">
          <product-variants
            :product="userProduct || defaultProduct"
            :variants="userVariants || defaultVariants"
          />
        </ui-col>
      </ui-row>
    </shared-loader>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import { UiButton, UiCol, UiRow, UiIcon } from '~/components/ui';
import ProductInstantTooltip from './instant-tooltip';
import ProductCard from '~/components/product/card';
import ProductVariants from '~/components/product/variants';
import SharedLoader from '~/components/shared/loader';

export default {
  name: 'ProductQuickbuy',

  components: {
    UiButton,
    UiCol,
    UiRow,
    UiIcon,
    ProductInstantTooltip,
    ProductCard,
    ProductVariants,
    SharedLoader,
  },

  props: {
    defaultProduct: {
      type: Object,
      required: true,
    },
    defaultVariants: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      loading: true,
      userProduct: null,
      userVariants: null,
    };
  },

  async mounted() {
    const { post: { quickbuy } } = await this.$q('quickbuy');
    this.userVariants = quickbuy.quickbuyProduct.categories.nodes[0].products.nodes.slice(0, 3);
    this.userProduct = quickbuy.quickbuyProduct;
    this.loading = false;
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
