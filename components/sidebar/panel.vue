<template>
  <div :class="classes">
    <h3>
      <ui-icon icon="chat" />{{ title }}</h3>
    <slot />
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  name: 'SidebarPanel',

  components: {
    UiIcon,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    version: {
      type: String,
      default: '', // [ '', solid ] checky, maybe un-used
    },
  },

  computed: {
    classes() {
      return ['cg-sidebar-panel', `cg-sidebar-panel--${this.version}`];
    },
  },
};
</script>

<style lang="scss">
.cg-sidebar-panel {
  border: 1px solid $gray-400; // checky, made same as footer-lines
  color: $black; // checky
  font-weight: $font-weight-bold;
  margin-bottom: 20px;
  width: 100%;

  h3 {
    border-bottom: 1px solid $gray-400; // checky, made same as footer-lines
    font-weight: $font-weight-bold;
    margin: 0;
    padding: 15px 10px 10px;
  }

  .ui-icon-chat {
    font-size: 34px;
    margin: 0 15px 0 5px;
  }

  &--solid {
    background: red; // checky
    border: 1px solid #007bb8;

    h3 {
      border-bottom: 0;
      padding-top: 20px;
    }
  }
}
</style>
