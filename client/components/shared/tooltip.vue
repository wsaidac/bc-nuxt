<template>
  <div class="shared-tooltip">
    <ui-popover
      :popper-class="popperClass"
      :content="content"
      :title="title"
      :visible-arrow="false"
      placement="bottom-start"
      trigger="hover"
    >
      <span slot="reference">
        <span v-text="iconPrefixContent" />
        <ui-icon icon="question-circle-o" />
      </span>
    </ui-popover>
  </div>
</template>

<script>
import { UiIcon, UiPopover } from '~/components/ui';

export default {
  name: 'SharedTooltip',

  components: {
    UiIcon,
    UiPopover,
  },

  props: {
    iconPrefixContent: {
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
.shared-tooltip {
  @include flex(center, center);

  & > span {
    color: $primary-500;
    font-size: $font-size-h6;
    margin: 6px 0;
  }
}
</style>
