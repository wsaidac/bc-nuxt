<template>
  <nuxt-link
    :to="url"
    :class="[classes]"
    :rel="rel"
    :target="blank"
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
    spacingClasses: VueTypes.string.def(''),
    url: VueTypes.string.def('#'),
  },

  computed: {
    classes() {
      const base = 'leading-normal text-base lg:text-lg no-underline';
      const color = this.invert ? 'text-white' : 'text-link';
      const underline = this.disable ? '' : 'hover:underline';
      const disable = this.disable ? 'opacity-20 cursor-not-allowed' : '';

      return [base, color, underline, disable, this.displayMode, this.spacingClasses];
    },
    target() {
      return this._blank ? '_blank' : '';
    },
  },
};

</script>
