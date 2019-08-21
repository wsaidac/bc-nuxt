<template>
  <footer class="bg-white w-full">
    <container without-insets>
      <row
        wrap
        class="lg:py-8"
      >
        <column class="w-full md:w-1/3">
          <footer-links
            :title="$t('footer.service-help')"
            :links="serviceLinks"
          />
        </column>
        <column class="w-full md:w-1/3">
          <footer-links
            :title="$t('footer.categories')"
            :links="categoryLinks"
          />
        </column>
        <column class="w-full md:w-1/3">
          <div class="w-full h-full bg-success p-8">trustpilot widget</div>
        </column>
      </row>
    </container>
    <divider />
    <container without-insets>
      <row
        wrap
        class="items-center"
      >
        <column class="hidden lg:flex lg:w-2/12">
          <logo />
        </column>
        <column class="w-full lg:w-6/12">
          <legal-links :links="legalLinks" />
        </column>
        <column class="w-full lg:w-4/12">
          <payment-methods :list="paymentMethods" />
        </column>
      </row>
    </container>
    <divider />
    <container without-insets>
      <row class="justify-center items-center">
        <column class="w-full py-4">
          <copyright />
        </column>
      </row>
    </container>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

import {
  Logo, PaymentMethods, FooterLinks, Copyright, LegalLinks,
} from '~/components/molecules';
import { Container, Row, Column } from '~/components/grid';
import { Divider } from '~/components/atoms';

export default {
  components: {
    Divider,
    Logo,
    PaymentMethods,
    FooterLinks,
    Copyright,
    LegalLinks,
    Container,
    Row,
    Column,
  },
  computed: {
    ...mapGetters('menus', ['categoryLinks', 'serviceLinks', 'legalLinks']),
    ...mapGetters('shared', ['paymentMethods']),
  },
};

</script>
