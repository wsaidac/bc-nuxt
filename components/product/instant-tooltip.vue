<template>
  <div class="product-instant-tooltip">
    <ui-popover
      title="Instant delivery"
      content="You'll receive the code by email, so you can use the credit right away. In most cases your code will be displayed instantly on your screen as well."
      placement="bottom-start"
      trigger="hover"
    >
      <p slot="reference">
        <span v-text="message" />
        <ui-icon icon="question-circle-o" />
      </p>
    </ui-popover>
  </div>
</template>

<script>
import { UiIcon, UiPopover } from '~/components/ui';

export default {
  name: 'ProductInstantTooltip',

  components: {
    UiIcon,
    UiPopover,
  },

  props: {
    message: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.product-instant-tooltip {
  p {
    color: $primary-500;
    font-size: $font-size-h6;
  }
}
</style>
