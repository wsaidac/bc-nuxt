export default {
  async mounted() {
    const { data, errors } = await this.$query('currentUser');
    this.$store.commit('auth/setCurrentUser', data.user);
    this.$nuxt.$emit('asyncStateLoaded');
  },
};
