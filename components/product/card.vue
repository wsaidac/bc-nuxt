<template>
  <div
    v-if="product"
    :class="classes"
  >
    <div
      class="product-card__img-link"
      @click="submitForm"
    >
      <picture v-if="hasImage">
        <img
          :src="regularImage"
          :srcet="`${regularImage}, ${retinaImage} 2x`"
          :alt="product.content.title">
      </picture>
    </div>
    <div class="product-card__content">
      <div class="product-card__title">
        <h3 v-text="$n(product.information.retailValue, 'USD')" />
        <p v-text="product.content.title" />
        <shared-tooltip
          v-if="mode === 'vertical' && product.content.tooltip && product.content.tooltip.content"
          :content="product.content.tooltip.content"
          :title="product.content.tooltip.title"
        />
      </div>
      <form
        action="/us/orders/quickbuy"
        method="post"
        class="product-card__actions"
      >
        <shared-instant-tooltip v-if="mode === 'horizontal'" />
        <div class="spacer" />
        <fieldset>
          <input
            type="hidden"
            name="productId"
            value="1"
          >
        </fieldset>
        <ui-select
          v-if="hasSelect"
          v-model="value"
          :options="options"
        />
        <ui-button
          type="warning"
          native-type="submit"
        >{{ cta }}</ui-button>
      </form>
    </div>
  </div>
</template>

<script>
import SharedTooltip from '~/components/shared/tooltip';
import SharedInstantTooltip from '~/components/shared/instant-tooltip';
import { UiButton, UiSelect } from '~/components/ui';

export default {
  name: 'ProductCard',

  components: {
    SharedTooltip,
    SharedInstantTooltip,
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
        { id: 5, label: 10, value: 10 },
      ],
    };
  },

  computed: {
    classes() {
      return ['product-card', `product-card--mode-${this.mode}`];
    },
    cta() {
      return this.mode === 'horizontal' ? 'Order now' : 'Order safely';
    },
    hasImage() {
      return this.product.content.image || this.product.categories.nodes[0].categoryHeader.image;
    },
    retinaImage() {
      return (
        (this.product.content.image && this.product.content.image.retina)
        || this.product.categories.nodes[0].categoryHeader.image.retina
      );
    },
    regularImage() {
      return (
        (this.product.content.image && this.product.content.image.regular)
        || this.product.categories.nodes[0].categoryHeader.image.regular
      );
    },
  },

  methods: {
    setAmount() {
      this.$store.commit('product/setAmount', this.value);
    },
    submitForm() {
      const form = document.querySelector('.product-card__actions');
      console.log(form);
      form.submit();
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

  &__img-link {
    @include flex();
  }

  &--mode-vertical {
    margin-top: 20px;

    .product-card {
      &__img-link {
        padding: 20px 10px;

        picture {
          display: block;
          margin: auto;
        }
      }

      &__content {
        border-top: 1px solid $gray-400;
        padding: 10px;
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
            padding: 10px;
          }
        }
      }
    }
  }

  &--mode-horizontal {
    @include flex();

    .product-card {
      &__img-link {
        img {
          border: 1px solid $gray-400;
          margin: 20px;
          width: calc(100% - 40px);
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

    @include media-breakpoint-only("xs") {
      .product-card {
        &__img-link {
          img {
            height: auto;
            margin: 10px;
            width: 30vw;
          }
        }
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
