<template>
  <div class="cg-container cg-error block block--blue">
    <div class="container">
      <h3 class="cg-error__desc">{{ $t('error.description') }}</h3>
      <p class="cg-error__help">{{ $t('error.help') }}</p>
      <a
        href="/"
        class="button button--primary button--med"
      >
        {{ $t('error.button_name') }}
      </a>
    </div>
  </div>
</template>

<script>
import removeContextChangeLoader from '~/mixins/removeContextChangeLoader';

export default {
  head() {
    return {
      title: `${this.$t('error.title')} - ${this.$t('general.domain')}`,
    };
  },
  mixins: [removeContextChangeLoader],
};
</script>

<style lang="scss">
.cg-error {
  text-align: center;

  &__help {
    margin-bottom: 40px;
  }

  .button {
    display: inline-block;
  }
}
</style>
