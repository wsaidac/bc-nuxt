<template>
  <div class="cg-layout layout-users">
    <loader />
    <header-navbar on-users />
    <cg-usps :usps="usps.items" />
    <nuxt />
    <rapido-footer on-users />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CgUsps from '~/components/usps';
import Loader from '~/components/loader/loader';
import HeaderNavbar from '~/components/header/navbar';
import RapidoFooter from '~/components/footer';

export default {
  head() {
    const { locale } = this.$i18n;
    return {
      htmlAttrs: {
        lang: locale,
      },
      title: this.$t('account.my-account'),
      link: [
        { rel: 'alternate', href: `https://${process.env.DOMAIN}${this.$route.path}`, hreflang: locale },
      ],
    };
  },

  components: {
    CgUsps,
    Loader,
    HeaderNavbar,
    RapidoFooter,
  },

  computed: {
    ...mapGetters('shared', ['usps']),
  },
};
</script>
