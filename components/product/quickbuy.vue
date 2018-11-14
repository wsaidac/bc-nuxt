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
          <product-variants :product="userProduct || defaultProduct" />
        </ui-col>
      </ui-row>
    </shared-loader>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import { UiButton, UiCol, UiRow, UiIcon } from "~/components/ui";
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

  data() {
    return {
      timerRunning: false,
      loading: true,
    };
  },

  computed: {
    userProduct() {
      return this.$store.getters['auth/quickbuy'];
    },
  },

  mounted() {
    this.$nuxt.$on('asyncStateLoaded', () => {
      this.loading = false;
    });
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
