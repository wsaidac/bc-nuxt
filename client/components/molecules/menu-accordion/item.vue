<template>
  <li
    class="px-6 flex justify-between items-center border-b border-gray w-full"
    @click="$emit('menu-accordion-item:click', slug)"
  >
    <div class="flex items-center">
      <icon
        v-if="icon"
        :icon="icon"
        font-size="5xl"
        color="accent"
        class="mr-4"
      />
      <p class="p-4 pl-0">{{ label }}</p>
    </div>
    <icon icon="breadcrumb" />
  </li>
</template>

<script>
import VueTypes from 'vue-types';

import { Icon } from '~/components/atoms';


export default {
  components: {
    Icon,
  },
  props: {
    slug: VueTypes.string.def(''),
    icon: VueTypes.string.def(''),
    label: VueTypes.string.def(''),
  },
};

</script>
