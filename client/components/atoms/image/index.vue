<template>
  <img
    v-if="!isResponsive"
    :src="src"
    :alt="imageAlt"
    :class="classes"
  >
  <picture
    v-else
    class="w-full"
  >
    <source
      :media="`(min-width:${breakpoints.LG}px)`"
      :srcset="`${src.regular}, ${src.retina || src.regular} 2x`"
    >
    <source
      :media="`(min-width:${breakpoints.MD}px)`"
      :srcset="src.tablet || src.regular"
    >
    <source
      :media="`(min-width:${breakpoints.SM}px)`"
      :srcset="src.smartphone || src.tablet || src.regular"
    >
    <img
      :src="src.regular"
      :alt="imageAlt"
      :class="['object-cover', classes]"
    >
  </picture>
</template>

<script>
import VueTypes from 'vue-types';
import { isObjectLike, get } from 'lodash';

import { breakpoints } from '~/constants';

const DimensionsType = VueTypes.shape({
  regular: String,
  smartphone: String,
  retina: String,
  tablet: String,
  alt: String,
});

export default {
  name: 'Image',
  props: {
    src: VueTypes.oneOfType([
      String,
      DimensionsType,
    ]).def('https://via.placeholder.com/300'),
    ratio: VueTypes.oneOfType([
      String,
      DimensionsType,
    ]),
    alt: VueTypes.string.def(''),
    height: VueTypes.string.def('auto'),
    width: VueTypes.string.def('full'),
  },
  computed: {
    isResponsive() {
      return isObjectLike(this.src);
    },
    breakpoints() {
      return breakpoints;
    },
    classes() {
      return `object-cover h-${this.height} w-${this.width}`;
    },
    imageAlt() {
      return get(this, 'src.alt', false) || this.alt;
    },
  },
};
</script>
