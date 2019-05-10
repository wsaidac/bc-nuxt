<template>
  <el-alert
    :title="title"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div v-html="description" />
  </el-alert>
</template>

<script>
import ElAlert from 'element-ui/lib/alert.js';

export default {
  name: 'UiAlert',

  components: {
    ElAlert,
  },

  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
@import "element-ui/packages/theme-chalk/src/alert.scss";

.el-alert {
  &__title {
    font-size: $font-size-h5;
  }

  .el-alert__description {
    margin: 0;
  }

  .el-icon-close {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;

    @include size(12px);

    &::before {
      @include svg-icon(
        12px,
        '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>'
      );
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
