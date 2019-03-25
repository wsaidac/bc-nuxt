<template>
  <div :class="classes">
    <slot name="title">
      <h2
        v-if="title"
        class="ui-panel__title"
        v-text="title"
      />
    </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiPanel',

  props: {
    title: {
      type: String,
      default: null,
    },
    raised: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return ['ui-panel'];
    },
  },
};
</script>

<style lang="scss">
.ui-panel {
  border: 1px solid $gray-400; // checky, made same as footer-lines
  padding: 20px;

  &__title {
    border-bottom: 1px solid $gray-400; // checky, made same as footer-lines
    color: $primary-500; // checky
    font-size: $font-size-h5;
    font-weight: $font-weight-bold;
    margin: 0 -20px 20px -20px;
    padding: 0 20px 20px 20px;
  }
}
</style>
