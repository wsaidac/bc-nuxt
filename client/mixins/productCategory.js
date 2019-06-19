export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    category() {
      return this.product.categories.nodes[0];
    },
  },
};
