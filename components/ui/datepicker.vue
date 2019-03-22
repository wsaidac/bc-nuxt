<template>
  <el-date-picker
    v-model="date"
    :format="$t('format')"
    :placeholder="$t('pickADay')"
    :prefix-icon="prefixIcon"
    value-format="yyyy-MM-dd"
    type="date"
    v-on="$listeners"
  />
</template>

<script>
import ElDatePicker from 'element-ui/lib/date-picker.js';

export default {
  name: 'UiDatePicker',

  components: {
    ElDatePicker,
  },

  props: {
    value: {
      type: [Date, String],
      required: false,
      default: '',
    },
    prefixIcon: {
      type: String,
      default: 'ui-icon ui-icon-calendar',
    },
  },

  computed: {
    date: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('change', v);
      },
    },
  },
};
</script>

<style lang="scss">
@import "element-ui/lib/theme-chalk/date-picker.css";

.el-date-editor {
  &.el-input,
  &.el-input__inner {
    width: 100%;
  }
}

.el-date-picker.el-popper {
  .el-picker-panel__icon-btn {
    height: 28px;
    margin-top: 0;
  }

  .el-icon-d-arrow-left::before {
    @include svg-icon(
      14px,
      '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#{$body-color}" d="M1011 1376q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23zm384 0q0 13-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23z"/></svg>'
    );
  }

  .el-icon-arrow-left::before {
    @include svg-icon(
      14px,
      '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#{$body-color}" d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>'
    );
  }

  .el-icon-arrow-right::before {
    @include svg-icon(
      14px,
      '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#{$body-color}" d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'
    );
  }

  .el-icon-d-arrow-right::before {
    @include svg-icon(
      14px,
      '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path fill="#{$body-color}" d="M979 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23zm384 0q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>'
    );
  }
}
</style>
