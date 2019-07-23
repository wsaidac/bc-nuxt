<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    highlighted: Boolean,
    space: VueTypes.oneOf(['wide', 'normal']).def('normal'),

  },
  computed: {
    classes() {
      const base = 'relative rounded-lg border border-gray border-solid';
      const hightlight = this.highlighted ? 'border-t-4 rounded-t-none border-t-highlight' : '';
      const padding = this.space === 'wide' ? 'p-6' : 'p-4';
      return [base, hightlight, padding];
    },
  },
};
</script>
