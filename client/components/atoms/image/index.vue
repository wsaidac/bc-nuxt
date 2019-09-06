<template>
  <img
    v-if="!isResponsive"
    :src="src"
    :alt="imageAlt"
    :class="classes"
  >
  <picture
    v-else
    :class="classes"
  >
    <source
      :media="`(min-width:${breakpoints.LG}px)`"
      :srcset="`${regular}, ${src.retina || regular} 2x`"
    >
    <source
      :media="`(max-width:${breakpoints.MD}px)`"
      :srcset="tablet"
    >
    <source
      :media="`(maX-width:${breakpoints.SM}px)`"
      :srcset="smartphone"
    >
    <img
      :src="regular"
      :alt="imageAlt"
      v-bind="$attrs"
      :class="[classes]"
    >
  </picture>
</template>

<script>
import VueTypes from 'vue-types';
import { isObjectLike, get } from 'lodash';

import { breakpoints } from '~/constants';

export default {
  name: 'UiImage',
  props: {
    src: VueTypes.oneOfType([
      String,
      Object,
    ]).def(''),
    alt: VueTypes.string.def(''),
    height: VueTypes.string.def('auto'),
    width: VueTypes.string.def('full'),
    contain: Boolean,
    position: VueTypes.oneOf(['left', 'right', 'center']).def('center'),
  },
  computed: {
    isResponsive() {
      return isObjectLike(this.src);
    },
    breakpoints() {
      return breakpoints;
    },
    classes() {
      return `object-${this.contain ? 'contain' : 'cover'} object-${this.position} h-${this.height} w-${this.width}`;
    },
    imageAlt() {
      return get(this, 'src.alt', false) || this.alt;
    },
    regular() {
      if (!this.isResponsive) return this.src;
      return this.src.regular || this.src.desktop;
    },
    tablet() {
      const { mobile, tablet } = this.src;
      return tablet || mobile || this.regular;
    },
    smartphone() {
      return this.src.smartphone || this.tablet;
    },


  },
};
</script>
