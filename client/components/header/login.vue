<template>
  <nuxt-link
    class="header-login"
    :to="$contextPath(to)"
    :title="$t('header.profile')"
    v-text="$t('header.my-account')"
  />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['currentUser']),
    ...mapGetters('async', ['isLoaded']),
    to() {
      return this.currentUser ? 'account/profile' : 'sessions/login';
    },
    title() {
      return this.currentUser ? this.$t('header.profile') : this.$t('header.login');
    },
    text() {
      return this.currentUser ? this.$t('header.my-account') : this.$t('header.login');
    },
  },
};
</script>

<style lang="scss">
.header-login {
  color: $white;

  &:hover {
    color: $white;
    text-decoration: none;
  }
}
</style>
