<template>
  <div class="cg-payment-options">
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <h2>{{ $t('payment-options') }}</h2>
      <p v-t="'checkout-options'" />
      <div
        v-for="(payment, i) in payments"
        :key="i"
        class="cg-payment-options__payment"
      >
        <img
          :src="payment.image"
          alt="payment image"
        >
        <p>
          <strong v-text="payment.name" /><br>
          {{ payment.text1 }}<br>
          <strong>{{ $t('shipping') }}: </strong>{{ payment.text2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderBanner from '~/components/header/banner';
import CgUsps from '~/components/usps';
import SeoBreadcrumbs from '~/components/seo/breadcrumbs';

const PaypalImage = require('~/assets/images/paypal.jpg');
const CreditcardImage = require('~/assets/images/creditcard.jpg');

export default {
  components: {
    HeaderBanner,
    CgUsps,
    SeoBreadcrumbs,
  },

  asyncData({ app }) {
    return {
      crumbs: app.$crumbs('Payment methods us'),
    };
  },

  data() {
    return {
      payments: [
        {
          image: PaypalImage,
          name: this.$t('paypal'),
          text1: this.$t('paypal_text_1'),
          text2: this.$t('paypal_text_2'),
        },
        {
          image: CreditcardImage,
          name: this.$t('credit-or-debit-card'),
          text1: this.$t('visa_and_mastercard_text_1'),
          text2: this.$t('visa_and_mastercard_text_2'),
        },
      ],
    };
  },

  computed: {
    ...mapGetters('shared', ['customerService', 'usps', 'header']),
  },
};
</script>

<style lang="scss">
.cg-payment-options {
  padding-bottom: 30px;

  &__payment {
    margin-bottom: 20px;

    @include flex();

    img {
      align-self: flex-start;
      margin-right: 20px;
    }

    p {
      margin-top: 0;
    }
  }
}
</style>
