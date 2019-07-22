<template>
  <hr :class="classes">
</template>

<script>
import VueTypes from 'vue-types';

export default {
  name: 'Divider',
  props: {
    type: VueTypes.oneOf(['normal', 'small']).def('normal'), // it may has more types
  },

  computed: {
    classes() {
      const base = ' border-0 my-4';
      const normalType = 'h-px w-full bg-gray -mx-4';
      const smallType = 'bg-secondary h-1 w-10 ml-0';
      const type = this.type === 'normal' ? normalType : smallType;

      return [base, type];
    },
  },
};
</script>
