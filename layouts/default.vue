<template>
  <div>
    <header-navbar />
    <nuxt />
  </div>
</template>

<script>
import HeaderNavbar from '~/components/header/navbar';

export default {
  components: {
    HeaderNavbar,
  },
};
</script>
