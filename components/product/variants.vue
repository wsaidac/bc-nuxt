<template>
  <div>
    <ul class="product-variants">
      <li
        v-for="item in variants"
        :key="item.id"
        class="product-variants__item"
      >
        <nuxt-link
          :to="$contextPath(item.slug)"
          :title="item.title"
        >
          <span v-text="item.title" />
          <ui-icon icon="chevron-right" />
        </nuxt-link>
      </li>
    </ul>
    <p
      v-if="product"
      class="text-right"
    >
      <nuxt-link
        :to="$contextPath(category.slug)"
        :title="category.name"
      >
        {{ $t('home.see-all-denominations') }}
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  components: {
    UiIcon,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    category() {
      return this.product.categories.nodes[0];
    },
    variants() {
      return this.category.products.nodes.slice(0, 3);
    },
  },
};
</script>

<style lang="scss">
.product-variants {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item {
    a {
      align-items: center;
      border: 1px solid $gray-400;
      color: $primary-500;
      display: flex;
      font-size: $font-size-h6;
      justify-content: space-between;
      margin: 10px 0;
      padding: 5px 10px;

      @include media-breakpoint-up("sm") {
        margin: 7px 0;
      }

      &:hover {
        background-color: $primary-500;
        border-color: $primary-500;
        color: $white;
        text-decoration: none;
      }
    }

    @include media-breakpoint-up("sm") {
      &:first-child a {
        margin-top: 0;
      }
    }
  }
}
</style>
