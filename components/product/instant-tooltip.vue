<template>
  <div class="product-instant-tooltip">
    <ui-popover
      :popper-class="popperClass"
      :content="content"
      :title="title"
      :visible-arrow="false"
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
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    popperClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.product-instant-tooltip {
  @include flex(center, center);

  p {
    color: $primary-500;
    font-size: $font-size-h6;
    margin: 6px 0;
  }
}
</style>
