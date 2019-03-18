<template>
  <div class="cg-error block block--blue">
    <div class="container">
      <h3 class="cg-error--title">{{ $t('error.description') }}</h3>
      <nuxt-link
        :to="$contextPath('')"
        class="button button--primary button--med"
      >
        {{ $t('error.button_name') }}
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss">
.cg-error {
  text-align: center;

  &--title {
    line-height: 1.2em;
  }

  .button {
    display: inline-block;
  }
}
</style>
