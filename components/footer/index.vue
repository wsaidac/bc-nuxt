<template>
  <footer class="rapido-footer">
    <hr>
    <div class="container container--mobile-not-padded">
      <ui-row>
        <ui-col :sm="24">
          <footer-payment-methods :payment-methods="paymentMethods" />
        </ui-col>
      </ui-row>
    </div>
    <hr>
    <footer-links />
    <footer-copyright />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';
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

  computed: {
    ...mapGetters('shared', ['paymentMethods']),
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

  @include media-breakpoint-only("xs") {
    hr:nth-of-type(2) {
      margin-bottom: 40px;
    }
  }
}
</style>
