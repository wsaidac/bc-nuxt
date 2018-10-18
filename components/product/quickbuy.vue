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
          :related="related"
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
    related: {
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

  &__highlight {
    background: $white;
    border: 1px solid $gray-400;
    display: flex;
    margin: 0 auto;
    padding: 10px;

    @include media-breakpoint-up('sm') {
      max-width: 520px;
      padding: 20px 10px 20px 20px;
    }
  }

  &__provider {
    border: 1px solid $gray-400;
    cursor: pointer;
    margin: 0;
    padding: 20px 10px;
  }

  &__offer {
    strong {
      display: block;
      font-size: $font-size-h3;
      line-height: 32px;
      margin-bottom: 5px;
    }

    p {
      font-size: $font-size-h6;
      margin: 0 0 10px;
    }
  }

  &__form {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
}
</style>
