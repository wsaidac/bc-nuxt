<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
import VueTypes from 'vue-types';

const spaceDimensions = {
  wide: 6,
  normal: 4,
  none: 0,
};

export default {
  props: {
    highlighted: Boolean,
    space: VueTypes.oneOf(['wide', 'normal', 'none']).def('normal'),

  },
  computed: {
    classes() {
      const base = 'flex-1 mb-5 relative rounded-lg border border-gray border-solid overflow-hidden bg-white';
      const hightlight = this.highlighted ? 'border-t-4 rounded-t-none border-t-highlight' : '';
      const padding = `p-${spaceDimensions[this.space]}`;
      return [base, hightlight, padding];
    },
  },
};
</script>
