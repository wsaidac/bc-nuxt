<template>
  <div class="category-products">
    <ui-row>
      <ui-col
        v-for="product in products"
        :key="product.id"
        :md="8"
        :lg="6"
        :sm="12"
      >
        <div class="category-products__product" >
          <div class="category-products__img-container">
            <img
              :src="product.imageUrl"
              :alt="product.title">
          </div>
          <div class="category-products__price">
            <span>{{ product.price }}</span><product-instant-tooltip />
          </div>
          <p v-text="product.title" />
          <div class="category-products__buy">
            <ui-select
              v-model="amount"
              :options="options"
              small
            />
            <ui-button type="warning" >
              ORDER SAFELY
            </ui-button>
          </div>
        </div>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
/* eslint-disable */
import { UiRow, UiCol, UiSelect, UiButton } from '~/components/ui';
import ProductInstantTooltip from '~/components/product/instant-tooltip';

export default {
  components: {
    UiButton,
    UiRow,
    UiCol,
    UiSelect,
    ProductInstantTooltip,
  },

  props: {
    products: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      amount: 1,
      options: [
        { id: 1, value: 1, label: 1 },
        { id: 2, value: 2, label: 2 },
        { id: 3, value: 3, label: 3 },
        { id: 4, value: 4, label: 4 },
        { id: 5, value: 5, label: 5 },
      ],
    };
  },
};
</script>

<style lang="scss">
.category-products {
  flex-flow: row wrap;

  @include flex();

  &__product {
    background: $white;
    border: 1px solid $gray-400;

    p {
      margin: 0;
      padding: 0 10px 10px;
    }
  }

  &__img-container {
    border-bottom: 1px solid $gray-400;
    height: 170px;

    @include flex(center, center);

    img {
      object-fit: contain;
      object-position: center center;
    }
  }

  &__price {
    font-size: $font-size-h4;
    font-weight: $font-weight-bold;
    padding: 10px;

    @include flex(space-between, center);
  }

  &__buy {
    padding: 0 10px 10px;

    @include flex(flex-end);

    .el-select {
      margin-right: 10px;
    }
  }

  .el-col {
    margin-top: 20px;
  }
}
</style>
