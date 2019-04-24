<template>
  <el-radio-button
    v-bind="$attrs"
    :label="value"
    v-on="$listeners"
  >
    <slot>
      {{ label }}
    </slot>
  </el-radio-button>
</template>

<script>
import ElRadioButton from 'element-ui/lib/radio-button.js';

export default {
  name: 'UiRadioButton',

  components: {
    ElRadioButton,
  },

  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$--radio-button-checked-background-color: $primary-500;
$--radio-button-checked-border-color: $primary-500;

@import "element-ui/packages/theme-chalk/src/radio-button.scss";

.el-radio-button {
  span {
    border-radius: 0 !important;
  }
}
</style>
