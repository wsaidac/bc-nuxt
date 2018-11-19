<template>
  <li class="header-navbar__service">
    <a
      v-if="currentUser && isLoaded"
      href="/account/profile"
      title="profile"
    >My account</a>
    <a
      v-else-if="isLoaded"
      href="/sessions/login"
      title="login"
    >Login</a>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['currentUser']),
    ...mapGetters('async', ['isLoaded']),
  },

  methods: {
    async logout() {
      await this.$m('logout');
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
</style>
