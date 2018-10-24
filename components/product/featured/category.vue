<template>
  <section class="product-featured-category">
    <h3 class="product-featured-category__title">
      <span v-text="category.title" />
    </h3>
    <ui-row>
      <ui-col
        v-for="product in productsLimited"
        :key="product.id"
        :xs="12"
        :sm="8"
        :md="4"
      >
        <nuxt-link
          :to="product.url"
          :title="product.title"
          class="product-featured-category__item"
        >
          <img
            :alt="product.title"
            :src="product.image.regular"
            :srcset="`${product.image.regular}, ${product.image.retina} 2x`"
          >
          <div
            class="product-featured-category__item-title"
            v-text="product.title"
          />
        </nuxt-link>
      </ui-col>
      <ui-transition-expand>
        <div v-if="!collapsed">
          <ui-col
            v-for="product in productsRest"
            :key="product.id"
            :xs="12"
            :sm="8"
            :md="4"
          >
            <nuxt-link
              :to="product.url"
              :title="product.title"
              class="product-featured-category__item"
            >
              <img
                :alt="product.title"
                :src="product.image.regular"
                :srcset="`${product.image.regular}, ${product.image.retina} 2x`"
              >
              <div
                class="product-featured-category__item-title"
                v-text="product.title"
              />
            </nuxt-link>
          </ui-col>
        </div>
      </ui-transition-expand>
    </ui-row>
    <div
      v-if="collapseable"
      class="product-featured-category__toggle"
      @click="toggle"
      v-text="collapsed ? 'Show more' : 'Show less'"
    />
  </section>
</template>

<script>
import { UiRow, UiCol, UiTransitionExpand } from '~/components/ui';

export default {
  name: 'ProductFeaturedCategory',

  components: {
    UiRow,
    UiCol,
    UiTransitionExpand,
  },

  props: {
    category: {
      type: Object,
      required: true,
    },
    limit: {
      type: Number,
      default: 6,
    },
  },

  data() {
    return {
      collapsed: true,
    };
  },

  computed: {
    collapseable() {
      return this.category.categories.length > this.limit;
    },

    productsLimited() {
      return this.category.categories.slice(0, this.limit);
    },

    productsRest() {
      return this.category.categories.slice(this.limit);
    },
  },

  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
    productImage(product) {
      if (product.image) {
        return product.image.desktop;
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
.product-featured-category {
  margin-bottom: 60px;

  @include media-breakpoint-up('sm') {
    background: $white;
    border: 1px solid $gray-400;
    margin: 10px 0;
    padding: 20px;
  }

  @include media-breakpoint-up('lg') {
    margin: 25px 0;
    padding: 0 75px 30px;
  }

  &__title {
    font-size: $font-size-h3;
  }

  &__item {
    background: $white;
    border: 1px solid $gray-400;
    color: $body-color;
    display: block;
    margin: 10px 0;

    &:hover {
      border-color: $primary-500;
      text-decoration: none;
    }

    img {
      margin: 10px auto;
      padding: 10px;
    }
  }

  &__item-title {
    font-size: 0.8em;
    padding: 10px;
    text-align: center;
  }

  &__toggle {
    background: $gray-300;
    color: $primary-500;
    cursor: pointer;
    font-size: 1.1em;
    margin: 10px 0 0 0;
    padding: 5px;
    text-align: center;
  }
}
</style>
