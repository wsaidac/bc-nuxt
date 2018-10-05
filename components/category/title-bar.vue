<template>
  <div class="category-title-bar">
    <div class="flex container">
      <h1>sadfsadsadfsd</h1>
      <div class="category-title-bar__tooltip">
        <div class="category-title-bar__roomster">
          <product-instant-tooltip message="Instant delivery" />
        </div>
      </div>
    </div>
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
  .flex {
    @include flex();
  }

  h1 {
    margin-right: 10px;
  }

  &__tooltip {
    @include size(150px, 100px);
  }

  &__roomster {
    @include size(150px, 100px);
  }
}
</style>
