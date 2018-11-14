<template>
  <li class="header-navbar__service">
    <a
      v-if="currentUser && userRequestFinished"
      href="localhost:4001/account/profile"
      title="Login"
    >login</a>
    <a
      v-else-if="userRequestFinished"
      href="localhost:4001"
      title="profile"
    >My account</a>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      userRequestFinished: false,
    };
  },

  computed: {
    ...mapGetters('auth', ['currentUser']),
  },

  async mounted() {
    this.$nuxt.$on('asyncStateLoaded', (status) => {
      if (status === 'finished') {
        this.userRequestFinished = true;
      }
    });
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
