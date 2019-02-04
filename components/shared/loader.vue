<template>
  <div :class="classes">
    <div class="shared-loader__blur">
      <slot />
    </div>
    <div
      v-if="loading"
      class="shared-loader__overlay"
    >
      <h2>Loading</h2>
      <div class="shared-loader__spinner" />
      <div class="shared-loader__background" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes() {
      return ["shared-loader", { "shared-loader--blur": this.loading }];
    }
  }
};
</script>

<style lang="scss">
.shared-loader {
  &__blur {
    transition: transform 0.3s;
  }

  &--blur {
    .shared-loader__blur {
      filter: blur(2px);
      transform: scale(0.98);
    }
  }

  &__overlay {
    flex-flow: column nowrap;

    @include flex(center, center);
    @include position(absolute, 0 0 0 0);
  }

  h2 {
    filter: none;
    margin-bottom: 20px;
    position: relative;
    z-index: 40;
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
    z-index: 40;

    @include size(100px);
  }

  .shared-loader__background {
    background: $black;
    opacity: 0.5;

    @include position(absolute, 0 0 0 0);
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
