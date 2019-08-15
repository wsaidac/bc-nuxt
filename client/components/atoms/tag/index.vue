<template functional>
  <span :class="[`bg-${props.color}`, 'text-2xs uppercase text-white p-2px rounded']">{{ props.text }}</span>
</template>

<script>
import VueTypes from 'vue-types';

export default {
  props: {
    color: VueTypes.string.def('success'),
    text: VueTypes.string.def('POPULAR'),
  },
};
</script>
