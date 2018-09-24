<template>
  <el-row
    :gutter="gutter"
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
  },
};
</script>

<style lang="scss">
@import "element-ui/packages/theme-chalk/src/row.scss";
</style>
