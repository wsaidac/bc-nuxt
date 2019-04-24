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
@import "element-ui/packages/theme-chalk/src/option.scss";

.el-select {
  margin-bottom: 20px;
  width: 100%;
}

.el-input__inner {
  background-color: #f3f3f3;
  border: 1px solid #d8d8d8;
}

.el-select-dropdown {
  border-radius: 0;
  margin-top: 0;
}

.el-select-dropdown__list {
  padding: 0;
}

.el-select-dropdown__item {
  padding: 0 10px;

  &.hover,
  &:hover {
    background-color: #1200ff;
    color: #fff;
  }
}

.el-select .el-input__suffix {
  background-color: $black;
  background-image: url("~assets/images/icons/caret-white.svg");
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 25px 25px;
  height: 100%;
  right: 0;
  width: 47px;
}

.el-popper[x-placement^="bottom"] .popper__arrow {
  display: none;
}
</style>
