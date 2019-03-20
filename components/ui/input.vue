<template>
  <el-input
    v-bind="$attrs"
    :prefix-icon="prefixUiIcon"
    :value="value"
    v-on="$listeners"
    @input="onInput"
  >
    <template
      v-for="(nodes, slot) in $slots"
      :slot="slot"
    >
      <slot :name="slot" />
    </template>
  </el-input>
</template>

<script>
import ElInput from 'element-ui/lib/input.js';

export default {
  name: 'UiInput',

  components: {
    ElInput,
  },

  props: {
    prefixIcon: {
      type: String,
      default: null,
    },
    value: {
      type: [String, Number],
      default: null,
    },
  },

  computed: {
    prefixUiIcon() {
      return this.prefixIcon && `ui-icon ui-icon-${this.prefixIcon}`;
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
// $--input-focus-border: var(--primary-500);

@import "element-ui/packages/theme-chalk/src/input.scss";

.el-input {
  input {
    border-radius: 0;
    padding-left: 10px;
    padding-right: 10px;

    &:focus {
      // border-color: var(--primary-500);
    }
  }

  &-group__append {
    border-radius: 0 !important;
  }
}
</style>
