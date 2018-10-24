<template>
  <div :class="classes">
    <nuxt-link
      class="product-card__image"
      to="#"
    >
      <img
        :src="product.imageUrl"
        :alt="product.title">
    </nuxt-link>
    <div class="product-card__content">
      <div class="product-card__title">
        <h3 v-text="$n(product.price.amount, product.price.currency)" />
        <p v-text="product.title" />
        <product-info-tooltip
          v-if="mode === 'vertical'"
          title="need data from product"
          content="need data from product also"
        />
      </div>
      <div class="product-card__actions">
        <product-instant-tooltip
          v-if="mode === 'horizontal'"
          message="Instant delivery"
        />
        <div class="spacer" />
        <ui-select
          v-if="hasSelect"
          v-model="value"
          :options="options"
        />
        <ui-button type="warning">
          {{ cta }}
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInstantTooltip from './instant-tooltip';
import ProductInfoTooltip from './info-tooltip';
import { UiButton, UiSelect } from '~/components/ui';

export default {
  name: 'ProductCard',

  components: {
    ProductInstantTooltip,
    ProductInfoTooltip,
    UiButton,
    UiSelect,
  },

  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    product: {
      type: Object,
      required: true,
    },
    hasSelect: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: 1,
      options: [
        { id: 0, label: 1, value: 1 },
        { id: 1, label: 2, value: 2 },
        { id: 2, label: 3, value: 3 },
        { id: 3, label: 4, value: 4 },
        { id: 4, label: 5, value: 5 },
      ],
    };
  },

  computed: {
    classes() {
      return [
        'product-card',
        `product-card--mode-${this.mode}`,
      ];
    },

    cta() {
      return this.mode === 'horizontal' ? 'Order now' : 'Order safely';
    },
  },
};
</script>

<style lang="scss">
.product-card {
  background: $white;
  border: 1px solid $gray-400;

  &__title {
    position: relative;

    h3 {
      font-size: $font-size-h6;
      margin: 0;

      @include media-breakpoint-up('sm') {
        font-size: $font-size-h5;
      }

      @include media-breakpoint-up('md') {
        font-size: 22px;
      }
    }

    p {
      font-size: $font-size-h6;
      margin: 3px 0 0;
    }

    .product-info-tooltip {
      @include position(absolute, -5px 0 null null);
    }
  }

  &__actions {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin-top: 20px;

    .spacer {
      flex: 1;
    }

    .el-select {
      margin-right: 15px;
      width: 60px;

      .el-input__inner {
        height: 35px;
        user-select: none;
      }

      .el-input__suffix {
        background: $gray-100;
        border-radius: 0 3px 3px 0;
        height: calc(100% - 2px);
        right: 1px;
        top: 1px;
        width: 27px;

        .el-select__caret {
          &::after {
            pointer-events: none;
            width: 100% !important;

            @include svg-icon(
              12px,
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#{$gray-900}" d="M 1 4 L 12 22.300781 L 23 4 L 1 4 z"></path></svg>'
            );
          }
        }
      }
    }
  }

  &--mode-horizontal {
    max-width: 520px;

    @include flex();

    .product-card__image {
      border: 1px solid $gray-400;
      margin: 20px;
      padding: 10px;

      @include size(125px, 100px);
    }

    .product-card__title {
      h3 {
        margin-bottom: 10px;
      }
    }

    .product-card__content {
      flex-grow: 1;
      padding: 20px 10px 20px 0;
    }
  }

  &--mode-vertical {
    margin-top: 20px;
    max-width: 300px;

    .product-card__image {
      border-bottom: 1px solid $gray-400;
      height: 200px;
      padding: 20px;

      @include flex(center, center);

      img {
        max-height: 100%;
        width: auto;
      }
    }

    .product-card__content {
      padding: 10px;
    }
  }

  @include media-breakpoint-only('xs') {
    &--mode-horizontal {
      figure {
        height: auto;
        margin: 10px;
      }

      .product-card-content {
        padding: 10px;
      }

      .product-card__actions {
        flex-flow: column-reverse nowrap;

        @include flex(flex-start, flex-end);
      }
    }
  }
}
</style>
