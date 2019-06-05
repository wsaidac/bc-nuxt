<template>
  <div
    v-if="product && product.rapidoProduct"
    :class="classes"
    itemscope
    itemtype="http://schema.org/Product"
  >
    <a
      class="product-card__img-link"
      @click="submitForm"
    >
      <picture v-if="image">
        <img
          :src="image.regular"
          :srcet="`${image.regular}, ${image.retina} 2x`"
          :alt="image.altText"
          :longdesc="image.description"
          itemprop="image"
        >
      </picture>
    </a>
    <div class="product-card__content">
      <div
        class="product-card__title"
        itemscope
        itemtype="http://schema.org/Offer"
        itemprop="offers"
      >
        <h3 v-text="$n(product.information.issueValue, 'currency')" />
        <p v-html="product.title" />
        <shared-tooltip
          v-if="mode === 'vertical' && hasTooltip"
          :content="product | dig('content.tooltip.content')"
          :title="product | dig('content.tooltip.title')"
        />
      </div>
      <form
        ref="submitForm"
        :action="$contextPath('order/quickbuy')"
        method="post"
        class="product-card__actions"
      >
        <shared-instant-tooltip v-if="mode === 'horizontal'" />
        <div class="spacer" />
        <fieldset>
          <input
            :value="product.rapidoProduct.id"
            type="hidden"
            name="productId"
          >
        </fieldset>
        <ui-select
          v-if="hasSelect"
          v-model="value"
          :options="options"
          name="selectAmount"
        />
        <fieldset v-else>
          <input
            type="hidden"
            name="selectAmount"
            value="1"
          >
        </fieldset>
        <ui-button
          type="primary"
          native-type="button"
          @click="submitForm"
        >
          {{ $t("general.order-safely") }}
        </ui-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import SharedTooltip from '~/components/shared/tooltip';
import SharedInstantTooltip from '~/components/shared/instant-tooltip';
import { UiButton, UiSelect } from '~/components/ui';
import { dig, productCategory } from '~/mixins';

export default {
  name: 'ProductCard',

  components: {
    SharedTooltip,
    SharedInstantTooltip,
    UiButton,
    UiSelect,
  },

  mixins: [productCategory, dig],
  props: {
    mode: {
      type: String,
      default: 'vertical',
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
        { id: 5, label: 10, value: 10 },
      ],
    };
  },

  computed: {
    ...mapGetters('shared', ['page']),
    hasTooltip() {
      return (
        this.product.content.tooltip
        && (this.product.content.tooltip.title
          && this.product.content.tooltip.content)
      );
    },
    classes() {
      return ['product-card', `product-card--mode-${this.mode}`];
    },
    // cta() {
    //   return this.mode === 'horizontal'
    //     ? this.$t('general.order-now')
    //     : this.$t('general.order-safely');
    // },
    image() {
      return (
        this.product.content.image
        || this.product.categories.nodes[0].categoryHeader.image
      );
    },
  },

  methods: {
    productClick() {
      this.$store.commit('product/setAmount', this.value);
      if (this.page === 'category') {
        this.$track('measureProductClick', {
          page: this.page,
          product: this.product,
        });
      }
      if (this.page === 'product' || this.page === 'category') {
        this.$track('clickTransformProductAddToCart', {
          product: this.product,
          quantity: this.value,
        });
      }
    },
    submitForm(e) {
      e.preventDefault();
      this.productClick();
      this.$refs.submitForm.submit();
    },
  },
};
</script>

<style lang="scss">
.product-card {
  background: $white;
  border: 1px solid $gray-400;

  fieldset {
    display: none;
  }

  &__title {
    position: relative;

    h3 {
      font-size: $font-size-h6;
      margin: 0;

      @include media-breakpoint-up("sm") {
        font-size: $font-size-h5;
      }

      @include media-breakpoint-up("md") {
        font-size: 22px;
      }
    }

    p {
      font-size: $font-size-h6;
      margin: 3px 0 0;
    }

    .shared-tooltip {
      @include position(absolute, -5px 0 null null);
    }
  }

  &__actions {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-top: 20px;

    .spacer {
      flex: 1;
    }

    .el-select {
      margin-bottom: 0;
      margin-right: 10px;
      width: 60px;

      .el-input__inner {
        border-radius: 0;
        height: 34px;
        padding: 5px 25px 5px 5px;
        text-align: center;
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

  &--mode-vertical {
    margin-top: 20px;
    padding: 15px;

    .product-card {
      &__img-link {
        padding-right: 15px;

        picture {
          display: block;
          margin: auto;
        }

        img {
          display: block;
          margin: auto;
          padding: 10px;
        }
      }

      &__content {
        border-top: 1px solid $gray-400;
        padding-top: 15px;
      }
    }

    @include media-breakpoint-up("sm") {
      .product-card {
        &__content {
          min-height: 121px;
        }
      }
    }

    @include media-breakpoint-only("xs") {
      .product-card {
        &__content {
          border-top: 0;
        }

        &__img-link {
          width: 30vw;

          img {
            border: 1px solid $gray-400;
          }
        }
      }
    }
  }

  &--mode-horizontal {
    @include flex(null, null);

    .product-card {
      &__img-link {
        border: 1px solid $gray-400;
        display: block;
        margin: 20px;
        padding: 10px;

        @include size(140px);
        @include flex(center, center);

        img {
          object-fit: contain;
        }
      }

      &__title {
        h3 {
          margin-bottom: 10px;
        }
      }

      &__content {
        flex-grow: 1;
        padding: 20px 10px 20px 0;
      }
    }

    @include media-breakpoint-only("md") {
      .product-card__img-link {
        @include size(110px);
      }
    }

    @include media-breakpoint-only("sm") {
      .product-card__img-link {
        @include size(95px);
      }

      .product-card__content {
        width: 150px !important;
      }
    }

    @include media-breakpoint-only("xs") {
      .product-card__img-link {
        margin: 10px;

        @include size(24vw);
      }

      .product-card__content {
        padding: 10px 10px 10px 20px;
      }

      .product-card__actions {
        flex-flow: column-reverse nowrap;

        @include flex(flex-start, flex-end);
      }
    }
  }
}

@include media-breakpoint-only("xs") {
  .cg-product .product-card--mode-vertical {
    max-width: 250px;

    .product-card__img-link {
      border-bottom: 1px solid $gray-400;
      padding: 20px;
      width: auto;

      img {
        border: none;
      }
    }
  }
}
</style>
