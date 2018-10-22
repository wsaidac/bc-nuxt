<template>
  <el-collapse
    ref="collapse"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-collapse>
</template>

<script>
import ElCollapse from 'element-ui/lib/collapse.js';

export default {
  name: 'UiCollapse',

  components: {
    ElCollapse,
  },

  methods: {
    collapseAll() {
      this.$refs.collapse.setActiveNames();
    },
  },
};
</script>

<style lang="scss">
@import 'element-ui/packages/theme-chalk/src/common/transition.scss';
@import 'element-ui/packages/theme-chalk/src/collapse.scss';
</style>
