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
      :slot="slot">
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
  // .el-input {
  //   .el-select__caret {
  //     opacity: 0.8;

  //     @include svg-icon(
  //       14px,
  //       '<svg xmlns="http://www.w3.org/2000/svg" width="1792" height="1792"><path d="M914.687 1696.887q-15.03 0-26.592-11.562l-538.779-538.78q-11.562-11.56-11.562-26.591 0-15.03 11.562-26.592l57.809-57.81q11.562-11.561 26.592-11.561t26.592 11.562l454.378 454.378 454.378-454.378q11.562-11.562 26.592-11.562t26.593 11.562l57.808 57.809q11.562 11.561 11.562 26.592 0 15.03-11.562 26.592l-538.779 538.78q-11.561 11.56-26.592 11.56zM906.31 116.85q15.03 0 26.593 11.56l538.779 538.78q11.561 11.562 11.561 26.592t-11.561 26.592l-57.81 57.81q-11.561 11.56-26.591 11.56-15.03 0-26.593-11.56L906.31 323.804 451.932 778.183q-11.562 11.562-26.592 11.562t-26.592-11.562l-57.809-57.809q-11.562-11.562-11.562-26.592t11.562-26.592l538.78-538.78q11.561-11.56 26.591-11.56z"/></svg>'
  //     );
  //   }
  // }

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
