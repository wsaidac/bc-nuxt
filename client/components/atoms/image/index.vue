<template>
  <img
    v-if="!isResponsive"
    :src="src"
    :alt="alt"
    class="h-auto w-full"
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
      :alt="alt"
      class="w-full object-cover h-auto"
    >
  </picture>
</template>

<script>
import VueTypes from 'vue-types';
import { isObjectLike } from 'lodash';

import { breakpoints } from '~/constants';

const DimensionsType = {
  regular: String,
  smartphone: String,
  retina: String,
  tablet: String,
};

export default {
  name: 'UiImage',
  props: {
    src: VueTypes.oneOfType([
      String,
      DimensionsType,
    ]),
    ratio: VueTypes.oneOfType([
      String,
      DimensionsType,
    ]),
    alt: VueTypes.string.def(''),
    mode: VueTypes.string.def(''),
  },
  computed: {
    isResponsive() {
      return isObjectLike(this.src);
    },
    breakpoints() {
      return breakpoints;
    },
  },
};
</script>
