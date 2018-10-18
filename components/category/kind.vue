<template>
  <div class="category-kind">

    <service-title
      :title="title"
      tooltip-message="Instant delivery"
    />

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
import ServiceTitle from '~/components/service/title';

export default {
  name: 'CategoryKind',

  components: {
    UiRow,
    UiCol,
    ProductCard,
    ServiceTitle,
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
    height: 91px;
    padding-bottom: 20px;

    @include flex(null, flex-end);

    .flex {
      height: 20px;

      @include flex(null, center);

      h1 {
        font-size: 33.6px;
      }

      .product-instant-tooltip {
        margin-left: 20px;
      }
    }
  }

  @include media-breakpoint-down('md') {
    &__header {
      .flex {
        h1 {
          font-size: 28.8px;
        }
      }
    }
  }

  @include media-breakpoint-only('xs') {
    &__header {
      background: $gray-100;
      height: 41px;
      padding-bottom: 0;

      .flex {
        h1 {
          display: none;
        }
      }
    }

    .el-col + .el-col {
      .product-card--mode-vertical {
        border-top: 0;
      }
    }
  }
}
</style>
