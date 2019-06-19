export default {
  created() {
    this.$store.commit('async/setContextChange', false);
  },
};
