<template>
  <div class="category-kind">
    <shared-title :title="title" />
    <div class="block block--gray">
      <div class="container container--mobile-padded">
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
import SharedTitle from '~/components/shared/title';

export default {
  name: 'CategoryKind',

  components: {
    UiRow,
    UiCol,
    ProductCard,
    SharedTitle,
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
@include media-breakpoint-only('xs') {
  .category-kind {
    .flex {
      h1 {
        display: none;
      }
    }
  }

  .category-kind:nth-of-type(2) {
    .flex {
      h1 {
        display: block;
      }
    }
  }

  .el-col + .el-col {
    .product-card {
      border-top: 0;
    }
  }
}
</style>
