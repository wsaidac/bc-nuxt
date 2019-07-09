<template>
  <button
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>

import VueTypes from 'vue-types';

export default {
  name: 'UiButton',
  props: {
    block: Boolean,
    justify: Boolean,
    type: VueTypes.oneOf(['primary', 'secondary']).def('primary'),
    disable: Boolean,
  },

  computed: {
    classes() {
      const base = 'py-2 px-10 rounded-full font-semibold text-center border-0 text-base cursor-pointer';
      const justify = 'w-full';
      const disable = 'bg-gray-dark cursor-not-allowed text-white';
      // const hover = ''
      // const active = ''

      const type = this.getTypeClasses();

      return [
        base,
        type,
        {
          [justify]: this.justify,
        },
        {
          [disable]: this.disable,
        },
      ];
    },
  },

  methods: {
    getTypeClasses() {
      const typeClasses = {
        primary: 'bg-tertiary text-white',
        secondary: 'border border-tertiary text-tertiary',
      };

      return !this.disable && typeClasses[this.type];
    },
  },
};
</script>
