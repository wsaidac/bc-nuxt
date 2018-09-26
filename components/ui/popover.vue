<template>
  <el-popover
    v-bind="$attrs"
  >
    <template
      v-for="(nodes, slot) in $slots"
      :slot="slot">
      <slot :name="slot" />
    </template>
  </el-popover>
</template>

<script>
import ElPopover from 'element-ui/lib/popover.js';

export default {
  name: 'UiPopover',

  components: {
    ElPopover,
  },
};
</script>

<style lang="scss">
$--popover-fill: $white;
$--popover-border-color: $gray-300;
$--popover-padding: 10px 6px;
$--popover-padding-large: 10px;

@import 'element-ui/packages/theme-chalk/src/common/transition.scss';
@import 'element-ui/packages/theme-chalk/src/popover.scss';

.el-popover {
  border-radius: 0;
  max-width: 400px;

  &__title {
    background: #59698e;
    color: $white;
    font-weight: $font-weight-bold;
    margin: -10px -10px 10px -10px;
    padding: 10px;
  }
}
</style>
