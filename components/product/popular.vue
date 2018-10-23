<template>
  <div class="product-popular">
    <h2
      class="product-popular__title"
      v-text="`Popular products`"
    />
    <ui-row>
      <ui-col
        v-for="product in products"
        :key="product.category.id"
        :xs="12"
        :sm="12"
        :md="8"
      >
        <nuxt-link
          :to="product.category.slug"
          :title="productTitle(product)"
          class="product-popular__item"
        >
          <img
            :alt="productTitle(product)"
            :src="productTitle(product)"
            :srcset="`${productImage(product, 'regular')}, ${productImage(product, 'retina')} 2x`"
          >

        </nuxt-link>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
import { UiCol, UiRow } from '~/components/ui';

export default {
  name: 'ProductPopular',

  components: {
    UiCol,
    UiRow,
  },

  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    productTitle(product) {
      if (product.category.categoryHeader) {
        return product.category.categoryHeader.title;
      }
      return '';
    },
    productImage(product, key) {
      if (product.category.categoryHeader) {
        return product.category.categoryHeader.image[key];
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
.product-popular {
  margin: 0 auto;
  max-width: 830px;
  padding: 20px 0;

  @include media-breakpoint-up('md') {
    padding: 40px 0 80px;
  }

  &__title {
    text-align: center;
  }

  &__item {
    border: 1px solid $gray-400;
    display: block;
    margin: 7.5px auto;
    max-width: 255px;

    &:hover {
      border-color: $primary-500;
    }
  }
}
</style>
