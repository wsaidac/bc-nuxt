<template>
  <li class="header-navbar__service">
    <a
      v-if="currentUser"
      href="localhost:4001/account/profile"
      title="Login"
    >login</a>
    <a
      v-else
      href="localhost:4001"
      title="profile"
    >My account</a>
  </li>
</template>

<script>
/* eslint-disable */
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["currentUser"])
  }

  // async mounted() {
  //   const {
  //     currentUser: { user }
  //   } = await $q("currentPersonalData");
  //   return {
  //     personalDetails: pickPersonalDetails(user),
  //     addressDetails: pickAddressDetails(user)
  //   };
  // }
  // methods: {
  //   async logout() {
  //     await this.$m('logout');   $m ??????????????
  //     window.location.reload();
  //   },
  // },
};
</script>

<style lang="scss">
</style>
