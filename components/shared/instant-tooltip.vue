<template>
  <shared-tooltip
    :content="content"
    :icon-prefix-content="message"
    :title="message"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import SharedTooltip from './tooltip';

export default {
  components: {
    SharedTooltip,
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
