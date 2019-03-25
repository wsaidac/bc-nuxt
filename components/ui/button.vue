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
    justify: {
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
      return [{ 'is-block': this.block }, { 'is-justified': this.justify }];
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
  background: #ffea6b;
  border: 2px solid $black;
  border-radius: 0;
  color: $black;
  font-size: 12px;
  line-height: 24px;
  padding: 5px 7px;
  text-transform: uppercase;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: $black;
    border: 2px solid $black;
    color: $white;
  }

  &.is-justified {
    display: block;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
  }

  &.is-block {
    display: block;
    text-align: center;
    width: 100%;
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
