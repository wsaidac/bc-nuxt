<template>
  <li class="header-navbar__service">
    <a
      v-if="isLoaded"
      :href="$contextPath(to)"
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
    ...mapGetters('context', ['locale']),
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
