<template>
  <el-form-item
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template
      v-for="(nodes, slot) in $slots"
      :slot="slot"
    >
      <slot :name="slot" />
    </template>
  </el-form-item>
</template>

<script>
import ElFormItem from 'element-ui/lib/form-item.js';

export default {
  name: 'UiFormItem',

  components: {
    ElFormItem,
  },
};
</script>

<style lang="scss">
@import "element-ui/packages/theme-chalk/src/form-item.scss";

.el-form-item {
  &__label {
    float: none;
    line-height: 20px;
  }

  &.is-required .el-form-item__label {
    &::before {
      display: none;
    }

    &::after {
      color: $danger-base;
      content: "*";
      margin-left: 4px;
    }
  }
}
</style>
