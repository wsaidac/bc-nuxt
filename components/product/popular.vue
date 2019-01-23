<template>
  <div class="product-popular">
    <h2
      class="product-popular__title"
      v-text="popularProducts.title"
    />
    <h6
      class="product-popular__subtitle"
      v-text="popularProducts.subtitle"
    />
    <ui-row>
      <ui-col
        v-for="product in decoratedProducts"
        :key="product.id"
        :xs="12"
        :sm="12"
        :md="8"
      >
        <nuxt-link
          :to="product.slug"
          :title="product.title"
          class="product-popular__item"
        >
          <img
            :alt="product.title"
            :src="product.image.regular"
            :srcset="`${product.image.regular}, ${product.image.retina} 2x`"
          >
        </nuxt-link>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
import { UiCol, UiRow } from '~/components/ui';
import { get } from 'lodash';

export default {
  name: 'ProductPopular',

  components: {
    UiCol,
    UiRow,
  },

  props: {
    popularProducts: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    decoratedProducts() {
      return this.popularProducts.items.map(({ category }) => ({
        ...category,
        title: get(category, 'categoryHeader.title'),
        image: {
          regular: get(category, 'categoryHeader.image.regular'),
          retina: get(category, 'categoryHeader.image.retina'),
        },
      }));
    },
  },
};
</script>

<style lang="scss">
.product-popular {
  margin: 0 auto;
  max-width: 830px;
  padding: 20px 0;

  @include media-breakpoint-up("md") {
    padding: 40px 0 80px;
  }

  &__title,
  &__subtitle {
    text-align: center;
  }

  &__subtitle {
    font-weight: 400;
    margin: 20px 0;
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
