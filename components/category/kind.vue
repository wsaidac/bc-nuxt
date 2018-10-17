<template>
  <div class="category-kind">
    <div class="category-kind__header container">
      <div class="flex">
        <h1 v-text="title" />
        <product-instant-tooltip message="Instant delivery" />
      </div>
    </div>
    <div class="block block--gray">
      <div class="container">
        <ui-row>
          <ui-col
            v-for="product in products"
            :key="product.id"
            :sm="12"
            :md="8"
            :lg="6"
          >
            <product-card
              :product="product"
              :has-select="true"
            />
          </ui-col>
        </ui-row>
      </div>
    </div>
  </div>
</template>

<script>
import { UiRow, UiCol } from '~/components/ui';
import ProductCard from '~/components/product/card';
import ProductInstantTooltip from '~/components/product/instant-tooltip';

export default {
  name: 'CategoryKind',

  components: {
    UiRow,
    UiCol,
    ProductCard,
    ProductInstantTooltip,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.category-kind {
  &__header {
    font-size: 16.8px;
    height: 91px;
    padding-bottom: 20px;

    @include flex(null, flex-end);

    .flex {
      height: 20px;

      @include flex(null, center);

      h1 {
        font-size: 2em;
      }

      .product-instant-tooltip {
        margin-left: 20px;
      }
    }
  }
}
</style>
