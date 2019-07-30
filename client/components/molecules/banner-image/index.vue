<template>
  <div :class="classes">
    <ui-image
      :src="src"
      :alt="alt"
    />
    <div
      v-if="gradient"
      class="absolute w-full top-0 left-0 bg-gradient-shadow-top h-full"
    />
    <div class="absolute bottom-0 let-0 bg-white rounded-tr">
      <ui-image
        v-if="brand"
        :src="brand.src"
        :alt="brand.alt || alt"
      />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types';
import { UiImage } from '~/components/atoms';

export default {
  components: {
    UiImage,
  },
  props: {
    src: VueTypes.oneOf([String, Object]).def(''),
    alt: VueTypes.string.def(''),
    brand: VueTypes.shape({
      src: VueTypes.oneOf([String, Object]).def(''),
      alt: VueTypes.string.def(''),
    }).def(''),
    gradient: Boolean,
    height: VueTypes.oneOf([String, Number]).def(''),
  },
  computed: {
    classes() {
      return [
        'w-full gradient relative overflow-hidden',
        { [`h-${this.height}`]: this.height },
      ];
    },
  },
};
</script>
