<template>
  <div class="category-title-bar container">
    <h1 v-text="'Xbox hard coded'" />
    <product-instant-tooltip message="Instant delivery" />
  </div>
</template>

<script>
import { UiPopover, UiButton, UiIcon } from '~/components/ui';
import ProductInstantTooltip from '~/components/product/instant-tooltip';

export default {
  components: {
    UiPopover,
    UiButton,
    UiIcon,
    ProductInstantTooltip,
  },
};
</script>

<style lang="scss">
.category-title-bar {
  @include flex();

  h1 {
    margin-right: 10px;
  }

  @include media-breakpoint-only('xs') {
    background: $gray-100;

    h1 {
      display: none;
    }
  }
}
</style>
