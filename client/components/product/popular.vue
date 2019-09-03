<template>
  <div class="product-popular">
    <h1
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
          :to="$contextPath(product.slug)"
          :title="product.title"
          class="product-popular__item"
        >
          <img
            v-if="product.image"
            :alt="product.image.altText"
            :longdesc="product.image.description"
            :src="product.image.regular"
            :srcset="`${product.image.regular}, ${product.image.retina} 2x`"
          >
        </nuxt-link>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
import { get } from 'lodash';
import { UiCol, UiRow } from '~/components/ui';

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
      if (!this.popularProducts.items) return [];
      return this.popularProducts.items.map(({ image, brand }) => ({
        ...brand,
        title: get(brand, 'categoryHeader.title'),
        image: {
          regular:
            get(image, 'regular')
            || get(brand, 'categoryHeader.image.regular'),
          retina:
            get(image, 'retina')
            || get(brand, 'categoryHeader.image.retina'),
          altText:
            get(image, 'altText')
            || get(brand, 'categoryHeader.image.altText'),
          description:
            get(image, 'description')
            || get(brand, 'categoryHeader.image.description'),
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
