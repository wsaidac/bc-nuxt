export default {
  computed: {
    generateCrumbs() {
      return function (label, additionalCrumbs) {
        const { homeTitle } = this.$store.state.shared;
        return [{ url: '/', label: 'Home', title: homeTitle }, ...(additionalCrumbs || []), { label }];
      };
    },
  },
};
