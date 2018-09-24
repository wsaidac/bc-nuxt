<template>
  <div>
    <header-navbar />
    <main>
      <nuxt />
    </main>
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
