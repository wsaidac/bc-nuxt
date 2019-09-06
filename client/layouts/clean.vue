<template>
  <div :class="classes">
    <loader />
    <header-navbar non-content />
    <nuxt />
    <rapido-footer non-content />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
        { rel: 'alternate', href: `https://${this.domain}${this.$route.path}`, hreflang: locale },
      ],
    };
  },

  components: {
    Loader,
    HeaderNavbar,
    RapidoFooter,
  },

  computed: {
    ...mapGetters('context', ['domain']),
    classes() {
      const { locale } = this.$i18n;
      const country = locale.split('-')[1];
      const language = locale.split('-')[0];

      return [
        'cg-layout',
        'layout-empty',
        `cg-locale-${locale}`,
        `cg-country-${country}`,
        `cg-language-${language}`,
      ];
    },
  },
};
</script>
