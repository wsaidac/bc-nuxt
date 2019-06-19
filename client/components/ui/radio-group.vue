<template>
  <el-radio-group
    v-bind="$attrs"
    :value="value"
    v-on="$listeners"
    @input="onInput"
  >
    <slot />
  </el-radio-group>
</template>

<script>
import ElRadioGroup from 'element-ui/lib/radio-group.js';

export default {
  name: 'UiRadioGroup',

  components: {
    ElRadioGroup,
  },

  props: {
    value: {
      type: [String, Number],
      default: null,
    },
  },

  methods: {
    onInput(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss">
@import 'element-ui/packages/theme-chalk/src/radio-group.scss';

.el-radio-group {
  width: 100%;
}
</style>
