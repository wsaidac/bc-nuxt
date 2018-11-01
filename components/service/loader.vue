<template>
  <div class="service-loading">
    <h2>Loading</h2>
    <div class="service-loading__spinner" />
    <div class="service-loading__background"/>
  </div>
</template>

<style lang="scss">
.service-loading {
  // border: 1px solid red;
  flex-flow: column nowrap;

  @include flex(center, center);
  @include position(absolute, 0 0 0 0);

  h2 {
    filter: none;
    margin-bottom: 20px;
    position: relative;
    z-index: 100;
  }

  &__spinner {
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

  &__background {
    background: $black;
    opacity: 0.5;

    @include position(absolute, 0 0 0 0);
  }

  @keyframes spin {
    100% { transform: rotate(360deg); }
  }
}
</style>
