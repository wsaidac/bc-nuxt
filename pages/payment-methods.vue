<template>
  <div class="cg-payment-options">
    <header-banner
      :image="header.image"
      :payoff-text="header.title"
    />
    <cg-usps :usps="usps.items" />
    <div class="container">
      <seo-breadcrumbs :crumbs="crumbs" />
      <h2>Payment options</h2>
      <p>On Rapido.com, you can checkout with the following trusted payment options. Each payment option will be described below.</p>
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
          <strong>Shipping: </strong>{{ payment.text2 }}
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

  data() {
    return {
      crumbs: [
        { url: '/', label: 'Home', title: 'Rapido.com: Buy your favorite Gift Cards online | Fast Email Delivery' },
        { label: 'Payment methods' },
      ],
      payments: [
        {
          image: PaypalImage,
          name: 'Paypal',
          text1: `You can pay with PayPal on Rapido.com. After selecting this payment option, you log into your PayPal account and confirm the payment.
          Next, the transaction is processed.`,
          text2: 'Upon receipt of payment, the top up voucher code is sent immediately.',
        },
        {
          image: CreditcardImage,
          name: 'Credit / Debit card',
          text1: `On Rapido.com, you can pay via VISA credit card, VISA debit card (Delta and Electron) and MasterCard.
            At the checkout, you select payment by credit card. Then you enter your credit card details, including the card holder, the card number,
            expiration date and CVV code. Then confirm payment.`,
          text2: 'Upon receipt of payment, the top up code is sent immediately.',
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
