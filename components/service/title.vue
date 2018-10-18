<template>
  <div class="service-title container">
    <div class="flex">
      <h1 v-text="title" />
      <product-instant-tooltip
        popper-class="page-popper"
        message="Instant delivery" />
    </div>
  </div>
</template>

<script>
import ProductInstantTooltip from '~/components/product/instant-tooltip';

export default {
  components: {
    ProductInstantTooltip,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    tooltipMessage: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.service-title {
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

  @include media-breakpoint-down('md') {
    .flex {
      h1 {
        font-size: 28.8px;
      }
    }
  }

  @include media-breakpoint-only('xs') {
    background: $gray-100;
    height: 41px;
    padding-bottom: 0;

    .flex {
      h1 {
        display: none;
      }
    }
  }
}
</style>
