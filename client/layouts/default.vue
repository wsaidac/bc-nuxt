<template>
  <div :class="classes">
    <loader />
    <header-navbar :items="main.categories" />
    <nuxt />
    <rapido-footer />
    <no-ssr>
      <portal-target
        transition="fade"
        name="overlay"
      />
    </no-ssr>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Loader from '~/components/loader/loader';
import HeaderNavbar from '~/components/header/navbar';
import RapidoFooter from '~/components/footer';

export default {
  components: {
    Loader,
    HeaderNavbar,
    RapidoFooter,
  },

  computed: {
    ...mapGetters('menus', ['main']),
    classes() {
      const { locale } = this.$i18n;
      const country = locale.split('-')[1];
      const language = locale.split('-')[0];

      return [
        'cg-layout',
        'layout-default',
        `cg-locale-${locale}`,
        `cg-country-${country}`,
        `cg-language-${language}`,
      ];
    },
  },
};
</script>
