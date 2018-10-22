<template>
  <div class="product-info-tooltip">
    <ui-popover
      :title="title"
      :content="content"
      placement="bottom-start"
      trigger="hover"
    >
      <p slot="reference">
        <ui-icon icon="question-circle-o" />
      </p>
    </ui-popover>
  </div>
</template>

<script>
import { UiIcon, UiPopover } from '~/components/ui';

export default {
  name: 'ProductInfoTooltip',

  components: {
    UiIcon,
    UiPopover,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.product-info-tooltip {
  @include flex(center, center);

  p {
    color: $primary-500;
    font-size: $font-size-h6;
  }
}
</style>
