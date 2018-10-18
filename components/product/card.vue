<template>
  <div :class="classes">
    ProductCard
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    mode: {
      type: String,
      default: 'vertical',
    },
    product: {
      type: Object,
      // required: true,
      default: () => {},
    },
  },

  computed: {
    classes() {
      return [
        'product-card',
        `product-card--mode-${this.mode}`,
      ];
    },
  },
};
</script>

<style lang="scss">

</style>
