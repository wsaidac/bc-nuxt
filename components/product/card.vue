<template>
  <div :class="classes">
    <figure>
      <img
        :src="product.imageUrl"
        :alt="product.title">
    </figure>
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
          Order safely
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
  },
};
</script>

<style lang="scss">
.product-card {
  background: $white;
  border: 1px solid $gray-400;

  figure {
    margin: 0;
  }

  &__title {
    position: relative;

    h3 {
      font-size: 22.4px;
      margin: 0;
    }

    p {
      font-size: 16.8px;
      margin: 3px 0 0;
    }

    .product-info-tooltip {
      @include position(absolute, -5px 0 null null);
    }
  }

  &__actions {
    flex-flow: row wrap;
    margin-top: 10px;

    @include flex(flex-end, flex-end);

    .spacer {
      flex-grow: 1;
    }

    .el-select {
      height: 35px;
      margin: 0 15px 0 0;
      width: 60px;

      .el-input__suffix {
        background: $gray-100;
        border-radius: 4px;
        left: 29px;
        width: 50px;

        @include svg-icon(
          14px,
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 1 4 L 12 22.300781 L 23 4 L 1 4 z"></path></svg>'
        );
      }
    }
  }

  &--mode-horizontal {
    @include flex();

    figure {
      position: relative;
      margin: 20px;
      width: 33%;

      img {
        border: 1px solid $gray-400;
        padding: 10px;
      }
    }

    .product-card__content {
      flex-grow: 1;
      padding: 20px 10px 20px 0;
    }
  }

  &--mode-vertical {
    margin-top: 20px;

    figure {
      border-bottom: 1px solid $gray-400;
      height: 270px;

      @include flex(center, center);

      img {
        object-fit: contain;
      }
    }

    .product-card__content {
      padding: 10px;
    }

    .product-card__actions {
      margin-top: 20px;
    }
  }

  @include media-breakpoint-only('xs') {
    &--mode-horizontal {
      figure {
        margin: 10px;
        height: auto;
      }

      .product-card-content {
        padding: 10px;
      }

      .product-card__actions {
        flex-flow: column-reverse nowrap;

        @include flex(flex-start, flex-end);
      }
    }

    &--mode-vertical {
      margin-top: 0;

      @include flex();

      .product-card__content {
        flex-grow: 1;
        padding-left: 0;
      }

      figure {
        border: 1px solid $gray-400;
        margin: 10px;
        height: auto;
        width: 25%;

        @include flex(center, center);

        img {
          padding: 10px;
        }
      }

      .el-button {
        @include position(relative, 3px 0 0 0);
      }
    }
  }

  @include media-breakpoint-down('md') {
    h3 {
      font-size: 19.2px
    }

    p {
      font-size: 14.4px;
    }
  }

  @include media-breakpoint-down('xs') {
    h3 {
      font-size: 16.8px
    }
  }
}
</style>
