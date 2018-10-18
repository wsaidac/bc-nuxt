<template>
  <div class="product-instant-tooltip">
    <ui-popover
      :popper-class="popperClass"
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
  }

  .el-popover__reference span {
    font-size: 18.1px !important;
  }

  @include media-breakpoint-down('md') {
    .el-popover__reference span {
      font-size: 15.5px !important;
    }
  }

  @include media-breakpoint-down('xs') {
    .el-popover__reference span {
      font-size: 12.96px !important;
    }
  }
}

.el-popover.el-popper.page-popper.el-popover--plain {
  font-size: 14px !important;
}

@include media-breakpoint-down('md') {
  .el-popover.el-popper.page-popper.el-popover--plain {
    font-size: 13px !important;
  }
}

@include media-breakpoint-down('xs') {
  .el-popover.el-popper.page-popper.el-popover--plain {
    font-size: 12px !important;
  }
}

</style>
