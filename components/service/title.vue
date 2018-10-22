<template>
  <div class="service-title container container--mobile-padded">
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
      margin-right: 20px;
    }
  }

  @include media-breakpoint-only('xs') {
    background: $gray-100;
    height: 41px;
    padding-bottom: 0;

    .flex h1 {
      font-size: $font-size-h5;
    }
  }
}
</style>
