<template>
  <footer class="rapido-footer">
    <div v-if="notOnAccountPage">
      <hr>
      <div class="container container--mobile-not-padded">
        <ui-row>
          <ui-col :sm="12">
            <footer-payment-methods :payment-methods="paymentMethods" />
          </ui-col>
        </ui-row>
      </div>
      <hr>
    </div>
    <footer-links v-if="notOnAccountPage" />
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
    notOnAccountPage() {
      const firstSlug = this.$route.path.split('/')[2];
      const accountPages = ['sessions', 'account'];
      return !accountPages.includes(firstSlug);
    },
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
