<template>
  <div>
    <header-navbar :items="main.categories" />
    <nuxt />
    <rapido-footer />
  </div>
</template>

<script>
import HeaderNavbar from '~/components/header/navbar';
import RapidoFooter from '~/components/footer';
import { mapGetters } from 'vuex';

export default {
  components: {
    HeaderNavbar,
    RapidoFooter,
  },

  computed: {
    ...mapGetters('menus', ['main']),
  },
};
</script>
