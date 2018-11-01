<template>
  <div :class="classes" >
    <div class="product-quickbuy__loading-helper">
      <h2
        class="product-quickbuy__title"
        v-text="`Let's speed it up`"
      />
      <ui-row>
        <ui-col :sm="{ span: 12, offset: 2 }">
          <product-card
            :product="asyncProduct || product"
            mode="horizontal"
          />
        </ui-col>
        <ui-col :sm="8">
          <product-variants
            :product="asyncProduct || product"
            :variants="asyncVariants || variants"
          />
        </ui-col>
      </ui-row>
    </div>
    <service-loader v-if="loading" />
  </div>
</template>

<script>
/* eslint-disable-next-line */
import { UiButton, UiCol, UiRow, UiIcon } from '~/components/ui';
import ProductInstantTooltip from './instant-tooltip';
import ProductCard from '~/components/product/card';
import ProductVariants from '~/components/product/variants';
import ServiceLoader from '~/components/service/loader';

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
    ServiceLoader,
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

  data() {
    return {
      loading: true,
      asyncProduct: null,
      asyncVariants: null,
    };
  },

  computed: {
    classes() {
      return ['product-quickbuy', { 'product-quickbuy--loading': this.loading }];
    },
  },

  async mounted() {
    const { post: { quickbuy } } = await this.$q('quickbuy');
    this.asyncVariants = quickbuy.quickbuyProduct.categories.nodes[0].products.nodes.slice(0, 3);
    this.asyncProduct = quickbuy.quickbuyProduct;
    this.loading = false;
  },
};
</script>

<style lang="scss">
.product-quickbuy {
  .product-quickbuy__loading-helper {
    transition: transform 0.3s;
  }

  &__title {
    text-align: center;
  }

  &--loading {
    .product-quickbuy__loading-helper {
      filter: blur(2px);
      transform: scale(0.97);
    }
  }
}
</style>
