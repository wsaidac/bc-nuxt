<template>
  <div class="footer-payment-methods">
    <div class="footer-payment-methods__quote">
      <ui-icon icon="protected-shield" />
      <p>
        <strong>Safely</strong> order with:
      </p>
    </div>
    <ul class="footer-payment-methods__list">
      <li
        v-for="method in paymentMethods"
        :key="method.name"
        class="footer-payment-methods__item"
      >
        <nuxt-link
          :title="`Safely order with ${method.name}`"
          to="/payment-methods"
        >
          <img
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
      type: Array,
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
