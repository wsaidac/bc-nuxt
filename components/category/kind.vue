<template>
  <div class="category-kind">
    <div class="container">
      <div class="category-kind__header">
        <h1 v-text="title" />
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

export default {
  name: 'CategoryKind',

  components: {
    UiRow,
    UiCol,
    ProductCard,
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
</style>
