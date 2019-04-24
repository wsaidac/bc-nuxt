<template>
  <a
    v-if="isLoaded && showLogin"
    class="header-login"
    :href="$contextPath(to)"
    :title="title"
    v-text="text"
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
    showLogin() {
      const { locale } = this.$i18n;
      return locale === 'da-dk' || locale === 'pl-pl';
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
