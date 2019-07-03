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
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  white-space: initial;

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

  &--primary {
    background: $warning-500;
    border: 2px solid $black;
    border-radius: 0;
    color: $black;
    font-size: 12px;
    padding: 10px 7px !important;
    text-transform: uppercase;

    &:hover {
      background: $black;
      border: 2px solid $black;
      color: $white;
    }
  }

  &--secondary {
    background: transparent;
    border: 1px solid $gray-600;
    color: $primary-500;
    font-weight: $font-weight-regular;

    @include size(100px, 43px);

    &:hover {
      background: $primary-500 !important;
      border: 1px solid $black !important;
      color: $white;
    }
  }

  &--tertiary {
    border: 2px solid $black;
    color: $black;
    font-size: 12px !important;
    padding: 6px 20px !important;

    &:hover {
      background: $black;
      color: $white;
    }
  }

  &--quaternary {
    background: $gray-300;
    border: 0;
    padding: 10px 25px !important;
    text-transform: none;

    &:hover {
      background: $primary-500;
      border: 0;
      color: $white;
    }
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

<docs>
We also can add .md documentation for storybook inside the tag `<docs></docs>`
</docs>
