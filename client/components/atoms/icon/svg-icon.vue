<template>
  <img
    :src="getIcon()"
    alt=""
  >
</template>

<script>
import VueTypes from 'vue-types';

const iconTypes = [
  'hole',
];

export default {
  props: {
    icon: VueTypes.oneOf(iconTypes),
  },
  methods: {
    getIcon() {
      /* eslint-disable global-require */
      // eslint-disable-next-line import/no-dynamic-require
      const icon = require(`~/assets/images/icons/redesign/svg/${this.icon}.svg`);
      return icon;
    },
  },
};
</script>
