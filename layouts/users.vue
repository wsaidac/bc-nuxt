<template>
  <div>
    <loader />
    <header-navbar onUsers />
    <cg-usps :usps="usps.items" />
    <nuxt />
    <rapido-footer onUsers />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CgUsps from '~/components/usps';
import Loader from '~/components/loader/loader';
import HeaderNavbar from '~/components/header/navbar';
import RapidoFooter from '~/components/footer';

export default {
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
