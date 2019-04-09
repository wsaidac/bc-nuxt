<template>
  <div>
    <loader />
    <header-navbar :items="main.categories" />
    <nuxt />
    <rapido-footer />
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
  },
};
</script>
