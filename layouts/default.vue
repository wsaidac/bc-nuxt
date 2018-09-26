<template>
  <div>
    <header-navbar />
    <nuxt />
    <rapido-footer />
  </div>
</template>

<script>
import HeaderNavbar from '~/components/header/navbar';
import RapidoFooter from '~/components/footer';

export default {
  components: {
    HeaderNavbar,
    RapidoFooter,
  },
};
</script>
