<template>
  <nuxt-link
    :to="url"
    :class="[classes]"
    :rel="rel"
    :target="target"
  >
    <slot />
  </nuxt-link>
</template>
<script>

import VueTypes from 'vue-types';

export default {
  name: 'Link',
  props: {

    blank: Boolean,
    disable: Boolean,
    displayMode: VueTypes.oneOf(['block', 'inline-block', 'inline']).def('inline-block'),
    invert: Boolean,
    rel: VueTypes.string.def(''),
    url: VueTypes.string.def('#'),
    sm: Boolean,
    bold: Boolean,
  },

  computed: {
    classes() {
      const base = 'leading-normal no-underline';
      const color = this.invert ? 'text-white' : 'text-link';
      const underline = this.disable ? '' : 'hover:underline';
      const disable = this.disable ? 'opacity-20 cursor-not-allowed' : '';
      const font = this.sm ? 'text-base' : 'text-base lg:text-lg';
      const weight = this.bold ? 'font-bold' : '';

      return [base, font, weight, color, underline, disable, this.displayMode];
    },
    target() {
      return this._blank ? '_blank' : '';
    },
  },
};

</script>
