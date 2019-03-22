<template>
  <section class="ui-form-section">
    <slot name="title">
      <h3
        v-if="title"
        class="ui-form-section__title"
        v-text="title"
      />
    </slot>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'UiFormSection',

  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.ui-form-section {
  padding-top: 25px;

  &__title {
    color: $gray-900; // checky
    font-size: $font-size-h6;
    font-weight: $font-weight-bold;
    margin: 0 0 25px 0;
  }

  & + .ui-form-section {
    border-top: 1px solid $gray-200; // checky
  }
}
</style>
