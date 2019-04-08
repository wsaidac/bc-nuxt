<template>
  <div class="footer-payment-methods">
    <div class="footer-payment-methods__quote">
      <ui-icon icon="protected-shield" />
      <p>
        <strong>{{ $t('footer.safely') }}</strong> {{ $t('footer.order-with') }}:
      </p>
    </div>
    <ul class="footer-payment-methods__list">
      <li
        v-for="(method, i) in paymentMethods"
        :key="i"
        class="footer-payment-methods__item"
      >
        <nuxt-link
          :title="`${$t('footer.safely-order-with')} ${method.name}`"
          :to="$contextPath ('payment-methods')"
        >
          <img
            v-if="method.image"
            :alt="method.name"
            :src="method.image.regular"
            :srcset="`${method.image.regular}, ${method.image.retina} 2x`"
          >
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { UiIcon } from '~/components/ui';

export default {
  name: 'FooterPaymentMethods',

  components: {
    UiIcon,
  },

  props: {
    paymentMethods: {
      type: [Array, Object],
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss">
.footer-payment-methods {
  border-right: 1px solid $gray-400;
  flex-flow: row wrap;
  padding: 10px;

  @include flex(flex-end, center);

  &__quote {
    @include flex(null, center);
  }

  .ui-icon {
    font-size: 32px;
    margin-right: 5px;
  }

  p {
    font-size: $font-size-h4;
    margin: 0;
    white-space: nowrap;
  }

  &__list {
    align-items: center;
    display: flex;
    height: 40px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0 10px;
    width: 40px;

    a {
      display: block;
    }
  }

  @include media-breakpoint-only("xs") {
    border: 0;

    @include flex(center, center);
  }
}
</style>
