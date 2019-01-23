<template>
  <el-select
    v-bind="$attrs"
    :class="classes"
    :prefix-icon="prefixUiIcon"
    :value="value"
    v-on="$listeners"
    @input="onInput"
  >
    <el-option
      v-for="option in options"
      :key="option.id"
      :label="option.label"
      :value="option.value"
    />
    <template
      v-for="(nodes, slot) in $slots"
      :slot="slot"
    >
      <slot :name="slot" />
    </template>
  </el-select>
</template>

<script>
import ElSelect from 'element-ui/lib/select.js';
import ElOption from 'element-ui/lib/option.js';

export default {
  name: 'UiSelect',
  components: {
    ElSelect,
    ElOption,
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
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    block: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        { 'is-block': this.block },
        { 'is-small': this.small },
        { 'is-justified': this.justify },
      ];
    },
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
@import "element-ui/packages/theme-chalk/src/select.scss";

.el-select {
  &.is-block {
    display: block;
    text-align: center;
    width: 100%;
  }

  &.is-small {
    display: inline-block;
    max-width: 80px;
  }
}
</style>
