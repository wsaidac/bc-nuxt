<template>
  <el-button
    :class="classes"
    :icon="uiIcon"
    :type="type"
    :native-type="nativeType"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-button>
</template>

<script>
import ElButton from 'element-ui/lib/button.js';

export default {
  name: 'UiButton',

  components: {
    ElButton,
  },

  props: {
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    nativeType: {
      type: String,
      default: 'button',
    },
  },

  computed: {
    classes() {
      return [{ 'is-block': this.block }];
    },

    uiIcon() {
      return this.icon && `ui-icon ui-icon-${this.icon}`;
    },
  },
};
</script>

<style lang="scss">
$--button-default-border: $body-color;
$--button-font-weight: 700;

@import "element-ui/packages/theme-chalk/src/button.scss";

.el-button {
  border: 2px solid $body-color;
  border-radius: 0;
  font-size: 12px;
  line-height: 24px;
  padding: 5px 7px;
  text-transform: uppercase;
  transition: background 0.3s ease, color 0.3s ease;

  &.is-block {
    display: block;
    text-align: center;
    width: 100%;
  }

  &--warning:hover {
    background-color: $body-color;
    color: $white;
  }

  @include media-breakpoint-up("sm") {
    font-size: 14.4px;
    padding: 3px 20px;
  }

  @include media-breakpoint-up("lg") {
    font-size: 16.8px;
  }
}
</style>
