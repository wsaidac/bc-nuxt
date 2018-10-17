<template>
  <div class="product-quickbuy">
    <h2
      class="product-quickbuy__title"
      v-text="`Let's speed it up`"
    />
    <ui-row>
      <ui-col :sm="{ span: 12, offset: 2 }">

        <!-- <div class="product-quickbuy__highlight">
          <ui-row :gutter="20">
            <ui-col :span="8">
              <figure class="product-quickbuy__provider">
                <nuxt-link
                  :to="product.url"
                  :title="product.title"
                >
                  <img
                    :src="product.imageUrl"
                    :alt="product.title"
                  >
                </nuxt-link>
              </figure>
            </ui-col>
            <ui-col :span="16">
              <div class="product-quickbuy__offer">
                <strong
                  v-text="$n(product.price.amount, product.price.currency)"
                />
                <p
                  v-text="product.title"
                />
              </div>
              <div class="product-quickbuy__form">
                <product-instant-tooltip message="Instant delivery" />
                <ui-button
                  type="warning"
                >
                  Order now
                </ui-button>
              </div>
            </ui-col>
          </ui-row>
        </div> -->

        <product-card
          :product="product"
          mode="horizontal"
        />

      </ui-col>
      <ui-col :sm="8">
        <ul class="product-quickbuy__related">
          <li
            v-for="item in related"
            :key="item.id"
            class="product-quickbuy__related-item"
          >
            <nuxt-link
              :to="item.url"
              :title="item.title"
            >
              <span v-text="item.title" />
              <ui-icon icon="chevron-right" />
            </nuxt-link>
          </li>
        </ul>
        <p class="text-right">
          <nuxt-link
            :to="product.url"
            :title="product.title"
          >
            See all denominations
          </nuxt-link>
        </p>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
/* eslint-disable-next-line */
import { UiButton, UiCol, UiRow, UiIcon } from '~/components/ui';
import ProductInstantTooltip from './instant-tooltip';
import ProductCard from '~/components/product/card';

export default {
  name: 'ProductQuickbuy',

  components: {
    UiButton,
    UiCol,
    UiRow,
    UiIcon,
    ProductInstantTooltip,
    ProductCard,
  },

  props: {
    product: {
      type: Object,
      required: true,
    },
    related: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.product-quickbuy {
  &__title {
    text-align: center;
  }

  &__highlight {
    background: $white;
    border: 1px solid $gray-400;
    display: flex;
    margin: 0 auto;
    padding: 10px;

    @include media-breakpoint-up('sm') {
      max-width: 520px;
      padding: 20px 10px 20px 20px;
    }
  }

  &__provider {
    border: 1px solid $gray-400;
    cursor: pointer;
    margin: 0;
    padding: 20px 10px;
  }

  &__offer {
    strong {
      display: block;
      font-size: $font-size-h3;
      line-height: 32px;
      margin-bottom: 5px;
    }

    p {
      font-size: $font-size-h6;
      margin: 0 0 10px;
    }
  }

  &__form {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__related {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__related-item {
    a {
      align-items: center;
      border: 1px solid $gray-400;
      color: $primary-500;
      display: flex;
      font-size: $font-size-h6;
      justify-content: space-between;
      margin: 10px 0;
      padding: 5px 10px;

      @include media-breakpoint-up('sm') {
        margin: 7px 0;
      }

      &:hover {
        background-color: $primary-500;
        border-color: $primary-500;
        color: $white;
        text-decoration: none;
      }
    }

    @include media-breakpoint-up('sm') {
      &:first-child a {
        margin-top: 0;
      }
    }
  }
}
</style>
