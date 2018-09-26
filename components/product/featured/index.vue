<template>
  <div class="product-featured">
    <h2
      class="product-featured__title"
      v-text="'Featured products'"
    />
    <product-featured-category
      v-for="category in categories"
      :key="category.title"
      :category="category"
      :limit="limit"
    />
  </div>
</template>

<script>
import ProductFeaturedCategory from './category';

export default {
  name: 'ProductFeatured',

  components: {
    ProductFeaturedCategory,
  },

  props: {
    categories: {
      type: Array,
      default() {
        return [];
      },
    },
    limit: {
      type: Number,
      default: 6,
    },
  },
};
</script>

<style lang="scss">
.product-featured {
  &__title {
    text-align: center;
  }
}
</style>
