<template>
  <div class="cg-sidebar-panel">
    <h3>
      <ui-icon icon="chat" />{{ title }}
    </h3>
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
  },
};
</script>

<style lang="scss">
.cg-sidebar-panel {
  border: 1px solid $gray-400;
  color: $black;
  font-weight: $font-weight-bold;
  margin-bottom: 20px;
  width: 100%;

  h3 {
    border-bottom: 1px solid $gray-400;
    font-weight: $font-weight-bold;
    margin: 0;
    padding: 15px 10px 10px;
  }

  .ui-icon-chat {
    font-size: 34px;
    margin: 0 15px 0 5px;
  }
}
</style>
