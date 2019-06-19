<template>
  <el-row
    :gutter="gutter"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </el-row>
</template>

<script>
import ElRow from 'element-ui/lib/row.js';

export default {
  name: 'UiRow',

  components: {
    ElRow,
  },

  props: {
    gutter: {
      type: Number,
      default: 30,
    },
    padded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        { 'is-padded': this.padded },
      ];
    },
  },
};
</script>

<style lang="scss">
@import 'element-ui/packages/theme-chalk/src/row.scss';

.el-row {
  &.is-padded {
    margin-bottom: 30px;
    margin-top: 30px;
  }
}
</style>
