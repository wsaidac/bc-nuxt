<template>
  <div class="shared-loader">
    <slot />
    <div
      v-if="loading"
      class="shared-loader__overlay"
    >
      <h2>Loading</h2>
      <div class="shared-loader__spinner" />
      <div class="shared-loader__background"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
.shared-loader {
  flex-flow: column nowrap;
  padding: 10px;

  &__overlay {
    flex-flow: column nowrap;

    @include flex(center, center);
    @include position(absolute, 0 0 0 0);
  }

  h2 {
    filter: none;
    margin-bottom: 20px;
    position: relative;
    z-index: 100;
  }

  .shared-loader__spinner {
    animation: spin 1s infinite linear;
    border: 10px solid $gray-700;
    border-bottom-color: $primary-base;
    border-left-color: $primary-base;
    border-radius: 50%;
    filter: none;
    opacity: 1 !important;
    position: relative;
    z-index: 100;

    @include size(100px);
  }

  .shared-loader__background {
    background: $black;
    opacity: 0.5;

    @include position(absolute, 0 0 0 0);
  }

  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
}
</style>
