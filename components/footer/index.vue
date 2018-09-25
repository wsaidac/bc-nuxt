<template>
  <footer class="rapido-footer">
    <hr>
    <div class="container">
      <ui-row>
        <ui-col :sm="12">
          <footer-payment-methods
            :methods="methods"
          />
        </ui-col>
      </ui-row>
    </div>
    <hr>
    <footer-links
      :columns="links"
    />
    <footer-copyright/>
  </footer>
</template>

<script>
import { UiRow, UiCol } from '~/components/ui';
import FooterPaymentMethods from './payment-methods';
import FooterLinks from './links';
import FooterCopyright from './copyright';

export default {
  name: 'RapidoFooter',

  components: {
    UiRow,
    UiCol,
    FooterPaymentMethods,
    FooterLinks,
    FooterCopyright,
  },

  data() {
    return {
      methods: [
        { name: 'Visa', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/visa.png' },
        { name: 'Mastercard', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/mastercard.png' },
        { name: 'Maestro', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/maestro.png' },
        { name: 'American Express', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/american-express.png' },
        { name: 'PayPal', imageUrl: 'https://static.rapido.com/media/topup/shop/images/paymethods/pay-pal.png' },
      ],

      links: [
        {
          title: 'Rapido.com',
          links: [
            { title: 'About us', url: '/about-us' },
            { title: 'Payment options', url: '/payment-options' },
          ],
        },
        {
          title: 'Customer Care',
          links: [
            { title: 'Help', url: '/help' },
          ],
        },
        {
          title: 'Terms of Use',
          links: [
            { title: 'Privacy Policy', url: '/privacy-policy' },
            { title: 'Conditions', url: '/conditions' },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.rapido-footer {
  hr {
    background: $gray-400;
    border: none;
    color: $gray-400;
    height: 1px;
  }
}
</style>
