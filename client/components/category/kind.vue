<template>
  <div class="category-kind">
    <div class="block block--gray">
      <div class="container">
        <ui-row v-if="mixedCategory">
          <ui-col>
            <h2
              class="category-kind__title"
              v-text="title"
            />
          </ui-col>
        </ui-row>
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
    mixedCategory: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.category-kind {
  &__title {
    font-weight: $font-weight-light;
    padding-top: 20px;
  }

  @include media-breakpoint-down("sm") {
    .block {
      padding: 10px 0 20px;
    }

    &__title {
      font-size: $font-size-h4;
    }

    .flex {
      h1 {
        display: none;
      }
    }

    &:nth-of-type(2) {
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
}
</style>
