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
          :to="$contextPath(paymentMethodsLink)"
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
import { mapGetters } from 'vuex';
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

  computed: {
    ...mapGetters('menus', ['footer']),
    paymentMethodsLink() {
      return this.footer['paymentMethods'].slug;
    }
  },
};
</script>

<style lang="scss">
.footer-payment-methods {
  flex-flow: row wrap;
  padding: 10px;

  @include flex(center, center);

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
    p,
    .ui-icon {
      font-size: $font-size-h6;
    }

    &__item {
      width: 30px;
    }

    &__quote {
      margin-bottom: 15px;
    }
  }
}
</style>
