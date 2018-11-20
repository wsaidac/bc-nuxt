<template>
  <li class="header-navbar__service">
    <a
      v-if="isLoaded"
      :href="href"
      :title="title"
      v-text="text"
    />
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['currentUser']),
    ...mapGetters('async', ['isLoaded']),
    href() {
      return this.currentUser ? '/account/profile' : '/sessions/login';
    },
    title() {
      return this.currentUser ? 'profile' : 'login';
    },
    text() {
      return this.currentUser ? 'My Account' : 'Login';
    },
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
