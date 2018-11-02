<template>
  <product-instant-tooltip
    :content="content"
    :message="message"
    :title="message"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import ProductInstantTooltip from './instant-tooltip';

export default {
  components: {
    ProductInstantTooltip,
  },

  computed: {
    ...mapGetters('shared', ['instantDelivery']),
    message() {
      return this.instantDelivery.title;
    },
    content() {
      return this.instantDelivery.tooltip;
    },
  },
};
</script>


<style lang="scss">

</style>
