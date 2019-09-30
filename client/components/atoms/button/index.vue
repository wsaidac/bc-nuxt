<template>
  <button
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <icon
      v-if="loading"
      icon="loader"
      class="mx-auto"
    />
    <slot v-else />
  </button>
</template>

<script>

import VueTypes from 'vue-types';
import Icon from '~/components/atoms/icon';

export default {
  name: 'UiButton',
  components: {
    Icon,
  },
  props: {
    block: Boolean,
    justify: Boolean,
    type: VueTypes.oneOf(['primary', 'secondary']).def('primary'),
    disable: Boolean,
    loading: Boolean,
    my: VueTypes.number.def(0),
  },

  computed: {
    classes() {
      const base = 'btn';
      const justify = 'w-full';
      const disable = 'opacity-50 cursor-not-allowed';
      const active = !this.disable ? 'cursor-pointer active:bounce active:border-solid' : '';

      const type = this.getTypeClasses();
      const margin = `my-${this.my}`;

      return [
        base,
        type,
        active,
        {
          [justify]: this.justify,
        },
        {
          [disable]: this.disable || this.loading,
        },
        {
          [margin]: this.my,
        },
      ];
    },
  },

  methods: {
    getTypeClasses() {
      const typeClasses = {
        primary: 'border-0 bg-cta text-white',
        secondary: 'border border-cta text-cta',
      };

      const hoverClasses = {
        primary: 'hover:bg-cta-hover',
        secondary: 'hover:border-cta-hover hover:text-cta-hover',
      };


      return [this.disable ? '' : hoverClasses[this.type], typeClasses[this.type]];
    },
  },
};
</script>

<style scoped>
.btn {
  @apply py-2 px-10 rounded-full font-semibold text-center  text-base leading-normal min-w-button;
}
</style>
