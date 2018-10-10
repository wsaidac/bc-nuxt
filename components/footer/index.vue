<template>
  <footer class="rapido-footer">
    <div class="container">
      <footer-customer-service
        :link="customerService.link"
        :image="customerService.image"
        :title="customerService.primaryText"
        :description="customerService.secondaryText"
      />
    </div>
    <hr>
    <div class="container">
      <ui-row>
        <ui-col :sm="12">
          <footer-payment-methods
            :methods="paymentMethods"
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
import { mapGetters } from 'vuex';
import { UiRow, UiCol } from '~/components/ui';
import FooterPaymentMethods from './payment-methods';
import FooterCustomerService from './customer-service';
import FooterSeoBlock from './seo-block';
import FooterLinks from './links';
import FooterCopyright from './copyright';

export default {
  name: 'RapidoFooter',

  components: {
    UiRow,
    UiCol,
    FooterPaymentMethods,
    FooterCustomerService,
    FooterSeoBlock,
    FooterLinks,
    FooterCopyright,
  },

  data() {
    return {
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

  computed: {
    ...mapGetters('shared', ['paymentMethods', 'customerService']),
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
