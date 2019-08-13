<template>
  <img
    :src="getIcon()"
    alt=""
  >
</template>

<script>
import VueTypes from 'vue-types';

import { svgTypes } from './types';


export default {
  props: {
    icon: VueTypes.oneOf(svgTypes),
  },
  methods: {
    getIcon() {
      try {
        /* eslint-disable global-require */
        // eslint-disable-next-line import/no-dynamic-require
        const icon = require(`~/assets/images/icons/redesign/svg/${this.icon}.svg`);
        return icon;
      } catch (e) {
        return '';
      }
    },
  },
};
</script>
