<template>
  <div class="product-quickbuy">
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
        <product-variants
          :product="product"
          :variants="variants"
        />
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import { UiButton, UiCol, UiRow, UiIcon } from '~/components/ui';
import ProductInstantTooltip from './instant-tooltip';
import ProductCard from '~/components/product/card';
import ProductVariants from '~/components/product/variants';

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
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
    variants: {
      type: Array,
      default() {
        return [];
      },
    },
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
