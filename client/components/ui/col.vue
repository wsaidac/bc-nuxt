<template>
  <el-col v-bind="$attrs">
    <slot />
  </el-col>
</template>

<script>
import ElCol from 'element-ui/lib/col.js';

export default {
  name: 'UiCol',

  components: {
    ElCol,
  },
};
</script>

<style lang="scss">
@import 'element-ui/packages/theme-chalk/src/col.scss';
</style>
