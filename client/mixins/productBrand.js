export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    brand() {
      return this.product.brands.nodes[0];
    },
  },
};
