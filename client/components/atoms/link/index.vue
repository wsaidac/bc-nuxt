<template>
  <nuxt-link
    :to="url"
    :class="[classes]"
    :rel="rel"
    :target="target"
    v-on="$listeners"
  >
    <slot />
  </nuxt-link>
</template>
<script>

import VueTypes from 'vue-types';

export default {
  name: 'Link',
  props: {
    bold: Boolean,
    color: VueTypes.string.def('link'),
    blank: Boolean,
    disable: Boolean,
    displayMode: VueTypes.oneOf(['block', 'inline-block', 'inline']).def('inline-block'),
    invert: Boolean,
    wrapper: Boolean,
    rel: VueTypes.string.def(''),
    url: VueTypes.string.def('#'),
    size: VueTypes.string.def(''),
  },

  computed: {
    classes() {
      if (this.wrapper) {
        return 'cursor-pointer';
      }

      const base = 'leading-normal no-underline';
      const color = this.invert ? 'text-white' : `text-${this.color}`;
      const underline = this.disable ? '' : 'hover:underline';
      const disable = this.disable ? 'opacity-20 cursor-not-allowed' : '';
      const font = this.size || 'text-base';
      const weight = this.bold ? 'font-bold' : '';

      return [base, font, weight, color, underline, disable, this.displayMode];
    },
    target() {
      return this._blank ? '_blank' : '';
    },
  },
};

</script>
