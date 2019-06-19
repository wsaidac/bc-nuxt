<template>
  <el-tooltip
    v-bind="$attrs"
  >
    <template
      v-for="(nodes, slot) in $slots"
      :slot="slot"
    >
      <slot :name="slot" />
    </template>
  </el-tooltip>
</template>

<script>
import ElTooltip from 'element-ui/lib/tooltip.js';

export default {
  name: 'UiTooltip',

  components: {
    ElTooltip,
  },
};
</script>

<style lang="scss">
@import 'element-ui/packages/theme-chalk/src/common/transition.scss';
@import 'element-ui/packages/theme-chalk/src/tooltip.scss';
</style>
