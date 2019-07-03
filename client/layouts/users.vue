<template>
  <div :class="classes">
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
    debugger // eslint-disable-line
    const { locale } = this.$i18n;
    return {
      htmlAttrs: {
        lang: locale,
      },
      title: this.$t('account.my-account'),
      link: [
        { rel: 'alternate', href: `https://${this.domain}${this.$route.path}`, hreflang: locale },
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
    ...mapGetters('context', ['domain']),
    classes() {
      const { locale } = this.$i18n;
      const country = locale.split('-')[1];
      const language = locale.split('-')[0];

      return [
        'cg-layout',
        'layout-users',
        `cg-locale-${locale}`,
        `cg-country-${country}`,
        `cg-language-${language}`,
      ];
    },
  },
};
</script>
