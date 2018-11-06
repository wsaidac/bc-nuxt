<template>
  <shared-tooltip
    :content="content"
    :icon-prefix-content="title"
    :title="title"
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
    title() {
      return this.instantDelivery.title;
    },
    content() {
      return this.instantDelivery.tooltip;
    },
  },
};
</script>
