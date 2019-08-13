<template>
  <i
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </i>
</template>

<script>
import VueTypes from 'vue-types';

import { fontIconTypes } from './types';

export default {
  props: {
    icon: VueTypes.oneOf(fontIconTypes),
    color: VueTypes.string.def('link'),
    fontSize: VueTypes.string.def('base'),
  },

  computed: {
    classes() {
      return [
        'ui-icon',
        { [`ui-icon-${this.icon}`]: this.icon },
        { [`text-${this.color}`]: this.color },
        { [`text-${this.fontSize}`]: this.fontSize },
      ];
    },
  },
};
</script>
